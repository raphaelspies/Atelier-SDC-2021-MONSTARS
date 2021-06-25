module.exports = class Products {
  constructor(db) {
    this.db = db;
  }

  async getOneProduct(id) {
    const product = await this.db.select().from('products').where({id: `${id}`});
    console.log(product);
    return product;
    // return "hello from getOneProduct!";
  }

  // addProduct: (productInfo) => {
  //   reply.send(console.log('hello from getProductsHandler'));
  // },
};
