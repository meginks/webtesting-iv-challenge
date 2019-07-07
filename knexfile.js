// Update with your config settings.
localPgConnection = {
  host: 'localhost',
  database: 'database',
  user: 'me',
  password: 'password'
}

const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/database.db3'
    }, 
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }, 
    seeds: {
      directory: './data/seeds'
    }
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './data/test.db3'
    }, 
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    }, 
    seeds: {
      directory: './data/seeds'
    }
  },
  production: {
    client: 'pg',
    connection: prodDbConnection, 
    migrations: {
      directory: './data/migrations'
    }, 
    seeds: {
      directory: './data/seeds'
    }
  }
};
