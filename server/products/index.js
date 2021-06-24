const {
  allProductsSchema,
} = require('./schema');

// handlers
async function getProductsHandler(req, reply) {
  try {
    const { id } = req.params;
    const allProducts = await this.getAllProducts(id);
    reply.code(200).send(allProducts);
  } catch (err) {
    console.log('error trying to get all products', err);
  }
}

module.exports = function (fastify, opts, done) {
  fastify.get('/', { schema: allProductsSchema }, getProductsHandler);
  done();
};
