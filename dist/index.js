const fastify = require('fastify');
const products = require('./products');
// ({
//   logger: true,
// });
// const products = require('./products/index.js')
// CLI prettytext
// module.exports = async function(fastify, opts) {
// }
fastify
    .register(require('./products'), { prefix: '/products' });
fastify.listen(3000)
    .then((address) => console.log('listening on ', address))
    .catch((err) => {
    console.log('error starting server', err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map