const getAllQuestionsOpts = {
  schema: {
    query: {
      type: 'object',
      required: ['product_id'],
      properties: {
        product_id: { type: 'number' },
        page: { type: 'number' },
        count: { type: 'number' },
      },
    },
  },
};

module.exports = {
  getAllQuestionsOpts,
};
