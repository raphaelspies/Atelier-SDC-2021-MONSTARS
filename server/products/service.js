module.exports = class Products {
  constructor(db) {
    this.db = db;
  }

  async getOneProduct(id) {
    const product = await this.db.select().from('products').where({id: `${id}`});
    return product;
    // return "hello from getOneProduct!";
  }

  async getAllProducts() {
    const products = await this.db.select().from('products').whereBetween('id', [1, 50]);
    return products;
  }

  async addProduct(productInfo) {
    // const { id, name, slogan, description, category, default_price } = productInfo
  // const productAdded = await this.db.insert()
  return "hello from addProduct!";
  }

  async getStyles(id) {
    const styles = await this.db.select().from('styles').where({productid: id});
    return styles;
  }
};
