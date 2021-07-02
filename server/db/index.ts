import { Knex } from 'knex';

const connection = '172.17.0.2';

const db: Knex = require('knex')({
  client: 'pg',
  connection: {
    host: connection,
    user: 'postgres',
    password: '$1987#Aml',
    database: 'atelier',
  },
});

module.exports = db;
