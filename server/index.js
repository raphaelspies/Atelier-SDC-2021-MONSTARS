const fastify = require('fastify')({
  logger: true,
});
const fp = require('fastify-plugin');
const db = require('./db');

const QuestionsAndAnswers = require('./qa/service');

// CLI prettytext
// module.exports = async function(fastify, opts) {
// }

async function decorateFastifyInstance() {
  const questionsAndAnswers = new QuestionsAndAnswers(db);
  fastify.decorate('qna', questionsAndAnswers);
}

fastify.get('/', (req, reply) => {
  reply.send('hello!');
})

fastify
  .register(fp(decorateFastifyInstance))
  .register(require('./products'), { prefix: '/products' })
  .register(require('./qa'), { prefix: '/qa' });

fastify.listen(3000)
  .then((address) => console.log('listening on ', address))
  .catch((err) => {
    console.log('error starting server', err);
    process.exit(1);
  });
