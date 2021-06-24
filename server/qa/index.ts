import { FastifyInstance, FastifyReply } from "fastify";

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

module.exports = function (fastify: FastifyInstance, opts, done: Function): void {
  fastify.get('/:id', { schema: getAllQuestionsAndReviewsSchema }, getAllQuestionsAndReviewsHandler);
  done();
};
