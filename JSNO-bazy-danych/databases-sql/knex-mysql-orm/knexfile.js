import {env} from 'node:process'

export default {
  development: {
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : env.DB_PASS || '1234!',
      port: env.DB_PORT || 3366,
      database : 'sql-database'
    },
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
