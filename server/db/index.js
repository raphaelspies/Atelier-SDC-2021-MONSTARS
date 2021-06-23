const connection = 'localhost:3000';

const db = require('knex')({
  client: 'pg',
  connection: {
    host: connection,
    user: 'postgres',
    password: '',
    database: 'atelier',
  },
});

module.exports = db;
