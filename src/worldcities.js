import { client } from './redis.js';

export const addIntCities = () => {
  client.geoadd('cities', 0.0000, 0.0000, "North Pole");
  client.geoadd('cities', -0.1278, 51.5074, "London");
  client.geoadd('cities', -3.7032, 40.4168, "Madrid");
  client.geoadd('cities', -77.0369, 38.9072, "Washington D.C.");
  client.geoadd('cities', 139.6917, 35.6895, "Tokyo")
  client.geoadd('cities', 2.3522, 48.8566, "Paris");
  client.geoadd('cities', 12.5673, 41.8719, "Rome");
  client.geoadd('cities', 77.2300, 28.6100, "Delhi")
  client.geoadd('cities', -73.5673, 45.5017, "Montreal");
  client.geoadd('cities', 121.4737, 31.2304, "Shanghai")
  client.geoadd('cities', -104.9847, 39.7392, "Denver");
  client.geoadd('cities', 72.8777, 19.0760, "Mumbai")
  client.geoadd('cities', -99.1332, 19.4326, "Mexico City")
  client.geoadd('cities', -46.6333, -23.5505, "São Paulo")
  client.geoadd('cities', -97.5164, 35.4676, "Oklahoma City");
  client.geoadd('cities', 67.0099, 24.8615, "Karachi")
  client.geoadd('cities', 28.9784, 41.0082, "Istanbul")
  client.geoadd('cities', -74.0059, 40.7128, "New York City")
  client.geoadd('cities', 120.9842, 14.5995, "Manila")
  client.geoadd('cities', 117.3616, 39.3434, "Tianjin")
  client.geoadd('cities', 135.5022, 34.6937, "Osaka")
  client.geoadd('cities', 31.2461, 30.0444, "Cairo")
  client.geoadd('cities', -118.2437, 34.0522, "Los Angeles")
  client.geoadd('cities', 37.6173, 55.7558, "Moscow")
  client.geoadd('cities', 121.4737, 31.2304, "Shanghai")
  client.geoadd('cities', 88.3639, 22.5726, "Kolkata")
}