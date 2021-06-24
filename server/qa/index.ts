import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const fastify: FastifyInstance = require('fastify')();

export {};
const {
  getAllQuestionsAndReviewsSchema,
} = require('./schema.js');

async function getAllQuestionsAndReviewsHandler(
  req: FastifyRequest<{Params: { id: number }}>, reply: FastifyReply,
) {
  try {
    const { id } = req.params;
    const allQuestionsAndAnswers = await this.getAllQuestionsAndAnswers(id);
    reply.code(200).send(allQuestionsAndAnswers);
  } catch (err) {
    console.log('error trying to get all q & a from method: ', err);
    throw err;
  }
}

module.exports = async function (): Promise<void> {
  try {
    fastify.get('/:id', { schema: getAllQuestionsAndReviewsSchema }, getAllQuestionsAndReviewsHandler);
  } catch (err) {
    console.log('error here: ', err);
    throw err;
  }
};
