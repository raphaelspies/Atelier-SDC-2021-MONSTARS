import { Knex } from "knex";

module.exports = class Questions {
  db: Knex

  constructor(db) {
    this.db = db;
  }

  async getAllQuestions(product_id: number, page: number, count: number) {
    const knex = this.db;
    const allQuestions = await knex
      .select('questions.question_id', 'questions.question_body', 'questions.question_date', 'questions.asker_name', 'questions.asker_email', 'questions.question_helpfulness', 'questions.reported')
      .from('questions')
      .where({ id_products: product_id })
      .limit(count)
      .offset(count * page - count);

    const findAnswersForQuestions = allQuestions.map(async (question) => {
      const relatedAnswers = await knex
        .select('answers.answer_id as id', 'answers.body', 'answers.date', 'answers.answerer_name', 'answers.helpfulness', 'answers_photos.url as photos')
        .from('answers')
        .where({ id_questions: question.question_id })
        .leftJoin('answers_photos', 'answers_photos.answer_id', 'answers.answer_id');

      // formatting here to adhere to atelier's nested API data structure
      const formatted = relatedAnswers.reduce((acc, answer) => (
        { ...acc, [answer.id]: answer }
      ), {});
      return { ...question, answers: formatted };
    });

    async function addResultsWrapper() {
      const resolvedQuestionsAndAnswers = await Promise.all(findAnswersForQuestions);
      const resultsWrapper = {
        product_id,
        results: resolvedQuestionsAndAnswers,
      };
      return resultsWrapper;
    }

    const wrappedQuestionsAndAnswers = addResultsWrapper();
    return wrappedQuestionsAndAnswers;
  }

  async getAllAnswers(question_id) {
    const knex = this.db;
    const allAnswers = await knex('answers')
      .select('answer_id as id', 'body', 'date', 'answerer_name', 'helpfulness')
      .where({ id_questions: question_id });
    return allAnswers;
  }
};
