
exports.up = function(knex, Promise) {
  return knex.schema.createTable('properties_users', function(table) {
    table.increments()
    table.integer('property_id').notNullable().defaultTo(null)
    table.foreign('property_id').references('properties.id')
    table.integer('tenant_id').notNullable().defaultTo(null)
    table.foreign('tenant_id').references('users.id')
    table.integer('manager_id').notNullable().defaultTo(null)
    table.foreign('manager_id').references('users.id')
    table.integer('contract_id').notNullable().defaultTo(null)
    table.foreign('contract_id').references('contracts.id')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('properties_users').onDelete('CASCADE')
};
