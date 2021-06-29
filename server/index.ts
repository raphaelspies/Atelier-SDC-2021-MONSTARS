import { FastifyRegister } from "fastify";
import { Knex } from 'knex';

const fastify = require('fastify')({
  logger: {
    level: 'info',
    prettyPrint: true,
  },
});
const fp: FastifyRegister = require('fastify-plugin');
const db: Knex = require('./db/');
// model classes
const Products = require('./products/service');

async function decorateFastifyInstance(): Promise<void> {
  const products = new Products(db);
  fastify.decorate('products', products);
}

fastify
  .register(fp(decorateFastifyInstance))
  .register(require('./products'), { prefix: '/products' })

fastify.listen(3000)
  .then((address: string) => console.log('listening on ', address))
  .catch((err: ErrorEvent) => {
    console.log('error starting server', err);
    process.exit(1);
  });
