
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table) {
    table.increments()

    table.varchar('first_name', 50).notNullable().defaultTo('')
    table.varchar('last_name', 50).notNullable().defaultTo('')
    table.integer('phone_number').notNullable().defaultTo(null)
    table.varchar('email', 50).notNullable().defaultTo('')
    table.varchar('password', 50).notNullable().defaultTo('')
    table.boolean('ispm').notNullable().defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users')
};
