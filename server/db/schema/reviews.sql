DROP DATABASE IF EXISTS atelier;

CREATE DATABASE atelier;

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  id SERIAL,
  product_id INTEGER NULL DEFAULT NULL,
  rating INTEGER NULL DEFAULT NULL,
  date BIGINT NULL DEFAULT NULL,
  summary TEXT,
  body TEXT,
  recommend BOOLEAN,
  reported BOOLEAN,
  reviewer_name VARCHAR(255),
  reviewer_email VARCHAR(255),
  response VARCHAR(255) DEFAULT NULL,
  helpfulness INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE INDEX reviews_productid_idx on reviews(product_id);
COPY reviews
FROM '/Users/nickkim/Atelier-SDC-2021-MONSTARS/CSV/reviews.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS characteristics;

CREATE TABLE characteristics (
  id SERIAL,
  product_id INTEGER NULL DEFAULT NULL,
  name VARCHAR(50) DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE INDEX chara_productid_idx on characteristics(product_id);
COPY characteristics
FROM '/Users/nickkim/Atelier-SDC-2021-MONSTARS/CSV/characteristics.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS characteristic_reviews;

CREATE TABLE characteristic_reviews (
  id SERIAL,
  character_id INTEGER NULL DEFAULT NULL,
  review_id INTEGER NULL DEFAULT NULL,
  value INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

CREATE INDEX chara_charaid_idx on characteristic_reviews(character_id);
CREATE INDEX chara_reviewid_idx on characteristic_reviews(review_id);
COPY characteristic_reviews
FROM '/Users/nickkim/Atelier-SDC-2021-MONSTARS/CSV/characteristic_reviews.csv'
DELIMITER ','
CSV HEADER;

DROP TABLE IF EXISTS review_photos;

CREATE TABLE review_photos (
  id SERIAL,
  review_id INTEGER NULL DEFAULT NULL,
  url VARCHAR,
  PRIMARY KEY (id)
);

CREATE INDEX photos_reviewid_idx on review_photos(review_id);
COPY review_photos
FROM '/Users/nickkim/Atelier-SDC-2021-MONSTARS/CSV/reviews_photos.csv'
DELIMITER ','
CSV HEADER;