const fastify = require('fastify');

const {
  allProductsSchema,
  postProductSchema,
} = require('./schema');

const {
  getProductsHandler,
  postProductHandler,
} = require('./service');

// fastify.addHook('Validation', (async (req, res) => {
//   await schema.productSchema
// }))

module.exports = function (fastify, opts) {
  fastify.get('/', { schema: allProductsSchema }, getProductsHandler);
  fastify.post('/', { schema: postProductSchema }, postProductHandler);
};

// handlers