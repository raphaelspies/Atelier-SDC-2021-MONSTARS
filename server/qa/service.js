module.exports = class Questions {
  constructor(db) {
    this.db = db;
  }

  async getAllQuestions(product_id, page, count) {
    const knex = this.db;
    const allQuestions = await knex
      .select('questions.question_id', 'questions.question_body', 'questions.question_date', 'questions.asker_name', 'questions.asker_email', 'questions.question_helpfulness', 'questions.reported')
      .from('questions')
      .where({ id_products: product_id })
      .limit(count)
      .offset(count * page - count);

    const findAnswersForQuestions = allQuestions.map(async (question) => {
      const relatedAnswers = await knex.select('answer_id as id', 'body', 'date', 'answerer_name', 'helpfulness')
        .from('answers')
        .where({ id_questions: question.question_id });

      // formatting here to adhere to atelier API rules
      const formattedAnswers = relatedAnswers.reduce((acc, answer) => (
        { ...acc, [answer.id]: answer }
      ), {});

      return { ...question, answers: formattedAnswers };
    });
    return Promise.all(findAnswersForQuestions);
  }

  async getAllAnswers(question_id) {
    const allAnswers = await this.db('answers')
      .select('answer_id as id', 'body', 'date', 'answerer_name', 'helpfulness')
      .where({ id_questions: question_id });
  }
};
