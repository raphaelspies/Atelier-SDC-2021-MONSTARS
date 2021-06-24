import { Knex } from 'knex';

const fastify = require('fastify')({
  logger: true,
});
const db: Knex = require('./db');

const QuestionsAndAnswers = require('./qa');
const ReviewsClass = require('./reviews');

// CLI prettytext
// module.exports = async function(fastify, opts) {
// }

async function decorateFastifyInstance() {
  const questionsAndAnswers = new QuestionsAndAnswers(db);
  fastify.decorate('qna', questionsAndAnswers);
}

fastify
  .register(decorateFastifyInstance)
  .register(require('./products'), { prefix: '/products' })
  .register(require('./qa'));
  // .register(require('./reviews'));

fastify.listen(3000)
  .then((address: string) => console.log('listening on ', address))
  .catch((err: Error) => {
    console.log('error starting server', err);
    process.exit(1);
  });
