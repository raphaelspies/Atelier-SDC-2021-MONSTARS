const getAllQuestionsAndReviewsSchema = {
  type: 'object',
  require: ['product_id', 'results'],
  properties: {
    product_id: { type: 'number' },
    results: [
      {
        question_id: { type: 'number' },
        question_body: { type: 'string' },
        question_date: { type: 'string' },
        asker_name: { type: 'string' },
        question_helpfulness: { type: 'number' },
        reported: { type: 'boolean' },
        answers: { type: 'object' },
      },
    ],
  },
};

const paramsSchema = {
  type: 'object',
  properties: {
    id: { type: 'number' },
  },
};

module.exports = {
  getAllQuestionsAndReviewsSchema,
  paramsSchema,
}