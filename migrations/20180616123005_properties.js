
exports.up = function(knex, Promise) {
  return knex.schema.createTable('properties', function(table) {

      table.increments()
      table.varchar('addressline1', 60).notNullable().defaultTo('')
      table.varchar('addressline2', 60).defaultTo('')
      table.varchar('city', 60).notNullable().defaultTo('')
      table.varchar('state', 60).notNullable().defaultTo('')
      table.integer('postalcode', 15).notNullable().defaultTo(0)

    })
  };
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('properties')
};
