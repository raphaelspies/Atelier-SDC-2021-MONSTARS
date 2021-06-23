var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fastify = require('fastify')({
    logger: true,
});
fastify.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () { return 'hello world'; }));
fastify
    .register(require('./products'), { prefix: '/products' });
fastify.listen(3000)
    .then((address) => console.log('listening on ', address))
    .catch((err) => {
    console.log('error starting server', err);
    process.exit(1);
});
//# sourceMappingURL=index.js.map