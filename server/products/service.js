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

  async getAllProducts() {
    const products = await this.db.select().from('products').whereBetween('id', [1, 50]);
    return products;
  }
};

//   async addProduct(productInfo) {
//   const productAdded = await this.db.insert()
// },