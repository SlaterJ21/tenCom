// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:3000/cleverent'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  },

};
