import { client } from './redis.js';

export const addUsCities = () => {
  client.geoadd('uscities', -74.0059, 40.7128, "New York City, New York");
  client.geoadd('uscities', -118.2437, 34.0522, "Los Angeles, California");
  client.geoadd('uscities', -87.6298, 41.8781, "Chicago, Illinois");
  client.geoadd('uscities', -95.3698, 29.7604, "Houston, Texas");
  client.geoadd('uscities', -112.0740, 33.4484, "Phoenix, Arizona");
  client.geoadd('uscities', -75.1652, 39.9526, "Philadelphia, Pennsylvania");
  client.geoadd('uscities', -98.4936, 29.4241, "San Antonio, Texas");
  client.geoadd('uscities', -117.1573, 32.7157, "San Diego, California");
  client.geoadd('uscities', -96.7970, 32.7767, "Dallas, Texas");
  client.geoadd('uscities', -121.8949, 37.3382, "San Jose, California");
  client.geoadd('uscities', -97.7431, 30.2672, "Austin, Texas");
  client.geoadd('uscities', -81.6581, 30.3322, "Jacksonville, Florida");
  client.geoadd('uscities', -97.3307, 32.7555, "Fort Worth, Texas");
  client.geoadd('uscities', -82.9988, 39.9848, "Columbus, Ohio");
  client.geoadd('uscities', -122.4194, 37.7749, "San Francisco, California");
  client.geoadd('uscities', -80.8431267, 35.2270869, "Charlotte, North Carolina");
  client.geoadd('uscities', -86.1580, 39.7684, "Indianapolis, Indiana");
  client.geoadd('uscities', -122.3321, 47.6062, "Seattle, Washington");
  client.geoadd('uscities', -104.9903, 39.7392, "Denver, Colorado");
  client.geoadd('uscities', -77.0369, 38.9072, "Washington D.C.");
  client.geoadd('uscities', -86.7844, 36.1627, "Nashville, Tennessee");
  client.geoadd('uscities', -106.4850, 31.7619, "El Paso, Texas");
  client.geoadd('uscities', -122.6765, 45.5231, "Portland, Oregon");
  client.geoadd('uscities', -115.1398, 36.1749, "Las Vegas, Nevada");
  client.geoadd('uscities', -85.7585, 38.2527, "Louisville, Kentucky");
  client.geoadd('uscities', -76.6122, 39.2904, "Baltimore, Maryland");
  client.geoadd('uscities', -87.9667, 43.0389, "Milwaukee, Wisconsin");
  client.geoadd('uscities', -106.6056, 35.0845, "Albuquerque, New Mexico");
  client.geoadd('uscities', -110.9756, 32.2226, "Tucson, Arizona");
  client.geoadd('uscities', -119.7725, 36.7468, "Fresno, California");
}