const db: object = require('./db/index.ts');
const fastify = require('fastify')({
  logger: true,
});

const QuestionsAndAnswers = require('./qa');

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
  .register(require('./qa'))
  .register(require('./reviews'));

fastify.listen(3000)
  .then((address: string) => console.log('listening on ', address))
  .catch((err: Error) => {
    console.log('error starting server', err);
    process.exit(1);
  });
