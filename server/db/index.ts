import { Knex } from 'knex';

const connection = '18.117.76.170';

const db: Knex = require('knex')({
  client: 'pg',
  connection: {
    host: connection,
    user: 'postgres',
    password: 'password',
    database: 'atelier',
  },
});

module.exports = db;
