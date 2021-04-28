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
    pool: {
      "min": 2,
      "max": 6,
      "createTimeoutMillis": 3000,
      "acquireTimeoutMillis": 30000,
      "idleTimeoutMillis": 30000,
      "reapIntervalMillis": 1000,
      "createRetryIntervalMillis": 100,
      "propagateCreateError": false // <- default is true, set to false
    },
    client: 'pg',
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './data/migrations'
    }
  }

};
