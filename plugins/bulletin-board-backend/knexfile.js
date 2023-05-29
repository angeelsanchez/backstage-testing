// This file makes it possible to run "yarn knex migrate:make some_file_name"
// to assist in making new migrations
module.exports = {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'secret',
    database: 'backstage_plugin_bulletin-board',
    migrations: {
      directory: './migrations',
    },
  },
};
