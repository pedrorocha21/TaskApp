module.exports = {
  client: 'postgresql',
  connection: {
    database: 'tasks',
    user: 'postgres',
    password: 'v1r1d1s',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};
