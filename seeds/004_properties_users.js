
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('properties_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties_users').insert([
        {id: 1, property_id: 1, tenant_id: 1, manager_id: 2 ,contract_id: 1},
      ]);
    }).then(() => {
      return knex.raw(
        'SELECT setval(`properties_users_id_seq`, (SELECT MAX(id) FROM properties_users));'
      );
};
