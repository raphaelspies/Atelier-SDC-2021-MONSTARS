const {
  allProductsSchema,
  // addProductSchema,
} = require('./schema');

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

async function getAllProductsHandler(req, reply) {
  try {
    const products = await this.products.getAllProducts();
    reply.code(200).send(products);
  } catch (err) {
    reply.code(400).send(err);
    console.log(`error trying to get product all products: `, err);
  }
}

//routing
module.exports = function (fastify, opts, done) {
  fastify.get('/:id', getOneProductHandler);
  fastify.get('/', getAllProductsHandler);
  done();
};

// { schema: allProductsSchema },