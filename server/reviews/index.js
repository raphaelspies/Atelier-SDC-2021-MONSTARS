// TODO add schemas
// handlers

// get reviews by product id params(page,count,sort,id) defaults 1,5 no reported reviews
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

// post

// put x2

// routing
module.exports = function reviewRoutes(fastify, options, done) {
  fastify.get('/:product_id', getReviewsHandler);
  done();
};
