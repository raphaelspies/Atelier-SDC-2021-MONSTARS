import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";

const {
  getAllQuestionsAndReviewsSchema,
} = require('./schema');

async function getAllQuestionsAndReviewsHandler(req: any, reply: FastifyReply) {
  try {
    const { id } = req.params;
    const allQuestionsAndAnswers = await this.qna.getAllQuestionsAndAnswers(id);
    reply.code(200).send(allQuestionsAndAnswers);
  } catch (err) {
    console.log('error trying to get all q & a from method: ', err);
    throw err;
  }
}

async function getFeatureTestHandler(req: any, reply: FastifyReply) {
  try {
    const allFeatures: object = await this.qna.getTestFeatures();
    console.log('what is this?:', allFeatures);
    reply.code(200).send(allFeatures);
  } catch (err) {
    console.log('error getting test features');
    reply.code(404).send(err);
  }
}

module.exports = function (fastify: FastifyInstance, opts, done: Function): void {
  fastify.get('/:id', { schema: getAllQuestionsAndReviewsSchema }, getAllQuestionsAndReviewsHandler);
  fastify.get('/featuretest', getFeatureTestHandler);
  done();
};
