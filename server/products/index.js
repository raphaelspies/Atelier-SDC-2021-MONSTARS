const {
  allProductsSchema,
  // addProductSchema,
} = require('./schema');

// const {
//   getOneProduct,
//   // addProduct,
// } = require('./service');

// handlers
async function getOneProductHandler(req, reply) {
  try {
    const { id } = req.params;
    const product = await this.products.getOneProduct(id);
    reply.code(200).send(product);
  } catch (err) {
    reply.code(400).send(err);
    console.log(`error trying to get product: `, err);
  }
}

module.exports = function (fastify, opts, done) {
  fastify.get('/:id', getOneProductHandler);
  done();
};

// { schema: allProductsSchema },