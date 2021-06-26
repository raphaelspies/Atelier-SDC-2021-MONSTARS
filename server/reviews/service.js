module.exports = class Reviews {
  constructor(db) {
    this.db = db;
  }
  // eslint-disable-next-line max-len
  //  const reviews = await this.db.raw(`select reviews.id AS review_id, rating, summary,recommend, response, body, date, reviewer_name, helpfulness,JSONB_AGG(to_jsonb(review_photos) - 'review_id')AS photos from reviews  Left JOIN review_photos ON review_photos.review_id = reviews.id WHERE reviews.product_id =2 GROUP BY reviews.id LIMIT ${count} OFFSET ${offSet};`);
  // data.product = `${id}`;
  // data.page = `${page}`;
  // data.count = reviews.rowCount;
  // reviews.rows.forEach((entry) => {
  //   const dateCode = entry.date;
  //   const myDate = new Date(Number.parseInt(dateCode));
  //   entry.date = (myDate.toISOString());
  // });
  // data.results = reviews.rows;
  // return data;

  async getReviewsById(id, count, page) {
    const offSet = count * page - count;
    const data = {};
    const reviews = await this.db.raw(`select reviews.id AS review_id, rating, summary,recommend, response, body, date, reviewer_name, helpfulness from reviews where product_id = ${id} AND reviews.reported = false LIMIT ${count} OFFSET ${offSet};`);

    const reviewsWithPhotos = reviews.rows.map(async (review) => {
      review.date = new Date(Number.parseInt(review.date, 10));
      const photos = await this.db.raw(`select id, url from review_photos where review_photos.review_id = ${review.review_id};`);
      return { ...review, photos: photos.rows };
    });
    data.product = id;
    data.page = page;
    data.count = reviews.rowCount;
    data.results = await Promise.all(reviewsWithPhotos);
    return data;
  }

  async getReviewsMeta(id) {
    const data = {};
    data.product_id = `${id}`;
    data.recommended = {
      true: 0,
      false: 0,
    };
    data.ratings = {};
    data.Characteristics = {};

    const reviewMeta = await this.db.raw(`select id, product_id, rating, recommend from reviews where product_id = ${id} AND reviews.reported = false;`);
    // Counting number of recommends
    reviewMeta.rows.forEach((entry) => {
      if (entry.recommend) {
        data.recommended.true += 1;
      } else {
        data.recommended.false += 1;
      }
    });
    // Counting number of ratings per review
    reviewMeta.rows.forEach((entry) => {
      if (!data.ratings[entry.rating]) {
        data.ratings[entry.rating] = 1;
      } else {
        data.ratings[entry.rating] += 1;
      }
    });
    // Characteristic data
    const characterData = await this.db.raw(`select name, characteristic_reviews.character_id, AVG(value)::numeric(10,4) from characteristics LEFT JOIN characteristic_reviews ON characteristic_reviews.character_id = characteristics.id where product_id = ${id} GROUP BY name,characteristic_reviews.character_id;`);
    characterData.rows.forEach((entry) => {
      data.Characteristics[entry.name] = {
        id: entry.character_id,
        value: entry.avg,
      };
    });
    return data;
  }
};
