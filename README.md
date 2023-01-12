# Express-Upstash-Geosearch

- Express
- ES modules
- Redis
- Upstash
- Tailwind CSS
- Flowbite

## Demo

https://express-redis-upstash.codewithshin.com/


## Installation

```bash
git clone git@github.com:shinokada/express-upstash-geosearch.git
cd express-upstash-geosearch
# npm/pnpm/bun/yarn
pnpm i
```

### .env

Login to Upstash and find the database connection code and add it to `.env` file.

For example:

```bash
UPSTASH_REDIS=redis://default:cxxxxxxxxxxx22222xxxxxxxdddddddccccc@apn1-apt-jennet-33538.upstash.io:33538
```

## Starting the server

```bash
npm run start:tailwind
```

This command will start concurrently Tailswind CSS and a server. It will watche the input file for any changes and automatically process the input file and write the output to the specified file. 
