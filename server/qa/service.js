module.exports = class Questions {
  constructor(db) {
    this.db = db;
  }

  async getAllQuestions(product_id, page, count) {
    const allQuestions = await this.db
      .select('question_id', 'question_body', 'question_date', 'asker_name', 'asker_email', 'question_helpfulness', 'reported')
      .from('questions')
      .where({ id_products: product_id })
      .limit(count)
      .offset(count * page - count);
    const apiReturn = {
      product_id,
      results: allQuestions,
    };
    return apiReturn;
  }
};
