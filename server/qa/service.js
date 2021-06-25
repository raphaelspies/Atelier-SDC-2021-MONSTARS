module.exports = class Questions {
  constructor(db) {
    this.db = db;
  }

  async getAllQuestions(product_id) {
    const allQuestions = await this.db('questions')
      .where({ id_products: product_id });
    console.log(allQuestions);
    return allQuestions;
  }

  async getOneQuestion(product_id) {
    const oneQuestion = await this.db('questions').where('id', product_id);
    console.log('one question: ', oneQuestion);
    return oneQuestion;
  }
};
