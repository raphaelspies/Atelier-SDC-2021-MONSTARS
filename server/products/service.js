module.exports = class Products {
  constructor(db) {
    this.db = db;
  }

  async getAllProducts() {
    const products = await this.db.select().from('products').whereBetween('id', [1, 50]);
    return products;
  }

  async getOneProduct(id) {
    let product = await this.db.select().from('products').where({ 'products.id': `${id}` });
    const styles = await this.db.select('feature', 'value').from('features').where({ product_id: `${id}` });
    [product] = product;
    product.features = styles;
    // const product = await this.db.select().from('products').where({'products.id': `${id}`});
    return product;
  }

  // async addProduct(productInfo) {
  //   const { id, name, slogan, description, category, default_price } = productInfo;
  // const productAdded = await this.db.insert(productInfo);
  // return productAdded;
  // }

  async getStyles(id) {
    // const styles = await this.db.select().from('styles').where({productid: id});
    const styles = await this.db.select().from('products').innerJoin('photos', { 'products.id': 'photos.styleid' }).where({ 'products.id': `${id}` });
    return styles;
  }
};
