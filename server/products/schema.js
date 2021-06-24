module.exports = {

  addProductSchema: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'number' },
      name: { type: 'string' },
      slogan: { type: 'string' },
      description: { type: 'string' },
      category: { type: 'number' },
      default_price: { type: 'number' },
      created_at: { type: 'string' },
      updated_at: { type: 'string' },
    },
  },

  allProductsSchema: {
    type: 'array',
  },

};
