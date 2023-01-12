import Redis from 'ioredis';
import dotenv from 'dotenv';
import { redis_host, redis_port } from './config.js';

const config = dotenv.config();

const UPSTASH_REDIS = process.env.UPSTASH_REDIS || config.parsed.UPSTASH_REDIS

const client = new Redis(UPSTASH_REDIS);

const aroundLockm = async (long, lat, km) => {
  return await client.geosearch('cities', 'FROMLONLAT', long, lat, 'BYRADIUS', km, 'km', 'ASC', 'WITHDIST');
};

const nearbyCities = async (long, lat, km) => {
  return await client.geosearch('cities', 'FROMLONLAT', long, lat, 'BYRADIUS', km, 'km', 'ASC', 'WITHDIST')
}

const fromNorthPole = async (km) => {
  return await client.geosearch('cities', 'FROMMEMBER', 'North Pole', 'BYRADIUS', km, 'km', 'WITHDIST');
};

export { fromNorthPole, aroundLockm, nearbyCities, client };