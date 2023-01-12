import express from 'express';
import path from 'path';
import { v4 } from 'uuid';
import { fileURLToPath } from 'url';
import Bodyparser from 'body-parser';
import { fromNorthPole, aroundLockm, nearbyCities, client } from './src/redis.js';
import { addUsCities } from './src/uscities.js';
import { addIntCities } from './src/worldcities.js';

client.flushall();
addUsCities();
addIntCities();

const app = express();
app.use(express.json());
app.use(Bodyparser.json());

const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, '/public/')))
app.use((req, res, next) => {
  req.id = v4();
  console.time(`request: ${req.id}`);
  next();
});

// set view engine and view path
app.set('views', './src/views');
app.set('view engine', 'ejs');
// app.set('view engine', 'pug')
// app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  const title = 'Express Redis Upstash';
  res.render('index', { title: title });
  console.timeEnd(`request: ${req.id}`);
})

app.get('/location', (req, res) => {
  const title = 'Location';
  res.render('location', { title });
  console.timeEnd(`request: ${req.id}`);
})

app.post("/api/location", (req, res) => {
  const { latitude, longitude } = req.body;
  res.send({ latitude, longitude });
});

app.get('/nearby-cities/:distance', (req, res) => {
  const distance = req.params.distance;
  const title = 'Nearby cities';
  res.render('nearbycities', { distance: distance, title: title });
  console.timeEnd(`request: ${req.id}`);
})

app.post('/nearby-cities', async (req, res) => {
  // Get the user's location from the request body
  const latitude = parseInt(req.body.latitude);
  const longitude = parseInt(req.body.longitude);
  const distance = parseInt(req.body.distance);
  const cities = await nearbyCities(longitude, latitude, distance);
  res.send(cities);
});

app.get('/from-northpole/:km', async (req, res) => {
  const distance = parseInt(req.params.km);
  const data = await fromNorthPole(distance);
  // console.log(typeof data)
  const title = `Cities within ${distance} km of the North Pole`
  res.render('from-northpole', { data, title });
  console.timeEnd(`request: ${req.id}`);
});

app.get('/around/:long/:lat/:km', async (req, res) => {
  const data = await aroundLockm(parseInt(req.params.long), parseInt(req.params.lat), parseInt(req.params.km));
  const title = 'Find Cities Near a Specific Location using Longitude and Latitude Coordinates'
  res.render('around', { data, title });
  console.timeEnd(`request: ${req.id}`);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})
