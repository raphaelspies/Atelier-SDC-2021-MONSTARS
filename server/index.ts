import { FastifyRegister } from "fastify";
import { Knex } from 'knex';

const fastify = require('fastify')();
// ({
//   logger: {
//     level: 'info',
//     prettyPrint: true,
//   },
// });
const fp = require('fastify-plugin');
const db = require('./db');
// model classes
const Products = require('./products/service');

async function decorateFastifyInstance() {
  const products = new Products(db);
  fastify.decorate('products', products);
}

fastify
  .register(fp(decorateFastifyInstance))
  .register(require('./products'), { prefix: '/products' });

fastify.listen(3000, '0.0.0.0')
  .then((address: string) => console.log('listening on ', address))
  .catch((err: ErrorEvent) => {
    console.log('error starting server', err);
    process.exit(1);
  });

  fastify.get('/loaderio-2ca767992e99d62f25df010f75d89d0c/', (req, reply) => {
    reply.send('loaderio-2ca767992e99d62f25df010f75d89d0c');
  });