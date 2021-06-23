const fastify = require('fastify');
const schema = require('./schema.js');
const productsHandler = require('./service.js')

// fastify.addHook('Validation', (async (req, res) => {
//   await schema.productSchema
// }))

module.exports = function (fastify, opts) {
  fastify.get('/', { schema: allProductsSchema }, getProductsHandler)
  fastify.post('/', { schema: postProductSchema }, postProductHandler)
}




