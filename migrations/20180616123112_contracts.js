
exports.up = function(knex, Promise) {
  return knex.schema.createTable('contracts', function(table) {
    table.increments()

    table.integer('rent').notNullable().defaultTo(null)
    table.boolean('status').notNullable().defaultTo(true)
    table.string('contract').notNullable().defaultTo('')
    table.varchar('link', 1000).defaultTo('')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('contracts')
};
