
exports.up = function(knex, Promise) {
  return knex.schema.createTable('properties_users', function(table) {
    table.increments()


    table.integer('property_id').notNullable().defaultTo(null)
    table.foreign('property_id').references('properties.id').onDelete('CASCADE')
    table.integer('tenant_id').notNullable().defaultTo(null)
    table.foreign('tenant_id').references('users.id').onDelete('CASCADE')
    table.integer('manager_id').notNullable().defaultTo(null)
    table.foreign('manager_id').references('users.id').onDelete('CASCADE')
    table.integer('contract_id').notNullable().defaultTo(null)
    table.foreign('contract_id').references('contracts.id').onDelete('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('properties_users')
};
