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
const QuestionsAndAnswers = require('./qa/service');
const Products = require('./products/service');

async function decorateFastifyInstance(): Promise<void> {
  const questionsAndAnswers = new QuestionsAndAnswers(db);
  const products = new Products(db);
  fastify.decorate('qna', questionsAndAnswers);
  fastify.decorate('products', products);
}

fastify
  .register(fp(decorateFastifyInstance))
  .register(require('./products'), { prefix: '/products' })
  .register(require('./qa'), { prefix: '/qa' });

fastify.listen(3000)
  .then((address: string) => console.log('listening on ', address))
  .catch((err: ErrorEvent) => {
    console.log('error starting server', err);
    process.exit(1);
  });
