
exports.up = function(knex, Promise) {
  return knex.schema.createTable('properties', function(table) {

      table.increments()

      table.varchar('addressline1', 60).notNullable().defaultTo('')
      table.varchar('addressline2', 60)
      table.varchar('city', 60).notNullable().defaultTo('')
      table.varchar('state', 60).notNullable().defaultTo('')
      table.varchar('postalcode', 15).notNullable().defaultTo('')

    })
  };
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('properties')
};
