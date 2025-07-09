import knex from './knex-client.js'


const data = await knex('guests');

console.table(data)