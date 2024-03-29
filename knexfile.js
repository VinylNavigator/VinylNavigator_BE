// Update with your config settings.
require('dotenv').config('.env');

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/vn.sqlite3'
    },
    useNullAsDefault: true, 
    pool: {
        afterCreate: (conn, done) => {
          conn.run('PRAGMA foreign_keys = ON', done);
        },
    },
    migrations:{
      directory: './data/migrations'
    },
    seeds:{
        directory: './data/seeds'
    }
  },

  staging: {
    client: 'sqlite3',
    connection: {
      filename:'./data/staging.sqlite3'
    },
    useDefaultAsTrue: true,
    migrations: {
      directory: './data/migrations',
    }
  },

  production: {

    client: 'pg',
    useNullAsDefault: true,
    pool: { min: 2, max: 10},
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    }
    
  }

};
