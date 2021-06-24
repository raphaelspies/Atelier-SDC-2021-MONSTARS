const fastify = require('fastify');
const schema = require('./schema.js'); // deconstruct later
const productsHandler = require('./service.js');


function reviewRoutes(fastify, options, done) {
  fastify.get('/:product_id', getOneSchema, handler )
  fastify.get('/', getAllReview)
}

//handlers
async function getAllReviewsHandler ( req, res ) {
  const reviews = await this.reviews.getAllReviews(16057);
  return reviews
}