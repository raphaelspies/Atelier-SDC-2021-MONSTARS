import { FastifyInstance, FastifyReply } from "fastify";

const { getAllQuestionsOpts } = require('./schema');



async function getAllQuestionsHandler(req: any, reply: FastifyReply) {
  try {
    const { product_id, page, count } = req.query;
    const allQuestions: Array<object> = await this.qna.getAllQuestions(product_id);
    reply.code(200).send(allQuestions);
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
  fastify.get('/questions/', getAllQuestionsOpts, getAllQuestionsHandler);

  done();
};
