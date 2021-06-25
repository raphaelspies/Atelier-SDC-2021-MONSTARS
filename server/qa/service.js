import { Knex } from "knex";

// interface Question {
//   id: number,
//   question_body: string,
//   question_date: Date,
//   asker_name: string,
//   question_helpfulness: number,
//   reported: boolean,
//   id_products: number
// }

module.exports = class QuestionsAndAnswers {
  constructor(db) {
    this.db = db;
  }

  async getAllQuestionsAndAnswers() {
    const allQuestionsAndAnswers = await this.db('questions')
      .innerJoin('answers', 'answers.id_questions', 'questions.id');
    console.log(allQuestionsAndAnswers);
    return allQuestionsAndAnswers;
  }
};
