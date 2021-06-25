module.exports = class Reviews {
  constructor(db) {
    this.db = db;
  }

  async getReviewsById(id, count, page) {
    const offSet = count * page - count;
    let data = {};
    const reviews = await this.db.raw(`select id AS review_id, rating, summary,recommend, response, body, date, reviewer_name, helpfulness from reviews where reviews.product_id =${id} LIMIT ${count} OFFSET ${offSet};`);
    console.log('Model reviews:', reviews);
    data.product = `${id}`;
    data.page = `${page}`;
    data.count = reviews.rowCount;
    reviews.rows.forEach((entry) => {
      let dateCode = entry.date;
      console.log(entry.date);
      var myDate = new Date(dateCode*1);
      entry.date = (myDate.toISOString());
    });
    data.results = reviews.rows;
    return data;
  }
};
