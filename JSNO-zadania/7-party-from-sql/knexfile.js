import knexSnakeCaseMappers from 'knex-stringcase';
import path from 'node:path'

export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(import.meta.dirname, './db/my-base.sqlite3')
    },
    useNullAsDefault: true,
    ...knexSnakeCaseMappers.default(),
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds'
    }
  }
};
