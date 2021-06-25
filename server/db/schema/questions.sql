DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
  question_id INTEGER,
  id_products INTEGER NULL DEFAULT NULL,
  question_body TEXT NULL DEFAULT NULL,
  question_date BIGINT NULL DEFAULT NULL,
  asker_name VARCHAR NULL DEFAULT NULL,
  asker_email VARCHAR NULL DEFAULT NULL,
  reported BOOLEAN NULL DEFAULT NULL,
  question_helpfulness INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (question_id)
);

COPY questions
FROM '/Users/erikoh/Desktop/hackreactor/SDC/Atelier-SDC-2021-MONSTARS/data/questions.csv'
DELIMITER ','
CSV;

DROP TABLE IF EXISTS answers;

CREATE TABLE answers (
  answer_id SERIAL,
  id_questions INTEGER NULL DEFAULT NULL,
  body TEXT NULL DEFAULT NULL,
  date TEXT NULL DEFAULT NULL,
  answerer_name VARCHAR NULL DEFAULT NULL,
  answerer_email VARCHAR NULL DEFAULT NULL,
  reported BOOLEAN NULL DEFAULt NULL,
  helpfulness INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (answer_id)
);

COPY answers
FROM '/Users/erikoh/Desktop/hackreactor/SDC/Atelier-SDC-2021-MONSTARS/data/answers.csv'
DELIMITER ','
CSV HEADER;
