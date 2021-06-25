import { FastifyInstance, FastifyReply } from "fastify";

const {
  getAllQuestionsAndAnswersSchema,
} = require('./schema');

async function getAllQuestionsAndAnswersHandler(req: any, reply: FastifyReply) {
  try {
    const { id } = req.params;
    const allQuestionsAndAnswers = await this.qna.getAllQuestionsAndAnswers(id);
    reply.code(200).send(allQuestionsAndAnswers);
  } catch (err) {
    console.log('error trying to get all q & a from method: ', err);
    throw err;
  }
}

async function getOneQuestionHandler(req: any, reply: FastifyReply) {
  try {
    const { id } = req.params;
    const oneQuestion = await this.qna.getOneQuestion(id);
    reply.code(200).send(oneQuestion);
  } catch (err) {
    console.log('error trying to get one question: ', err);
    throw err;
  }
}

module.exports = function (fastify: FastifyInstance, opts, done: Function): void {
  fastify.get('/:id', { schema: getAllQuestionsAndAnswersSchema }, getAllQuestionsAndAnswersHandler);
  fastify.get('/:id/single', getOneQuestionHandler);
  done();
};
