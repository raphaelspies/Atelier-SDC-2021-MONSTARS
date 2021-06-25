import { Knex } from "knex";

module.exports = class QuestionsAndAnswers {
  constructor(db) {
    this.db = db;
  }

  async getOneQuestion() {
    const oneQuestion = await this.db('questions').where('id', 7);
    console.log('one question: ', oneQuestion);
    return oneQuestion;
  }

  async getAllQuestionsAndAnswers(id) {
    const allQuestionsAndAnswers = await this.db('questions')
      .where({ id_products: id })
      .innerJoin('answers', 'answers.id_questions', 'questions.id');
    console.log(allQuestionsAndAnswers);
    return allQuestionsAndAnswers;
  }
};

// select questions.id, questions.questions_body, questions.question_date, questions.asker_name, answers.body, answers.answerer_name,answers.answerer_email from questions inner join answers ON questions.id = answers.id_questions AND questions.id_products = 4;