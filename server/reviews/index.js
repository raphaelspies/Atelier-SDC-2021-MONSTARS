// TODO add schemas
// handlers

async function getReviewsHandler(req, reply) {
  try {
    const { product_id, count = 5, page = 1 } = req.params;
    const reviewsData = await this.reviews.getReviewsById(product_id, count, page);
    reply.code(200).send(reviewsData);
  } catch (err) {
    reply.code(400).send(err);
    console.log('Error trying to get reviews:', err);
  }
}

// get reviews meta by product id
async function getReviewsMetaHandler(req, reply) {
  try {
    const { product_id } = req.params;
    const reviewsData = await this.reviews.getReviewsMeta(product_id);
    reply.code(200).send(reviewsData);
  } catch (err) {
    reply.code(400).send(err);
    console.log('Error trying to get reviews meta:', err);
  }
}

// post

// put x2

// routing
module.exports = function reviewRoutes(fastify, options, done) {
  fastify.get('/:product_id', getReviewsHandler);
  fastify.get('/meta/:product_id', getReviewsMetaHandler);
  done();
};
