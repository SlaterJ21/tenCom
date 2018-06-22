
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('properties_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties_users').insert([
        {id: 1, property_id: 1, tenant_id: 2, manager_id: 1 ,contract_id: 1},
        {id: 2, property_id: 2, tenant_id: 3, manager_id: 1 ,contract_id: 1},
        {id: 3, property_id: 3, tenant_id: 4, manager_id: 1 ,contract_id: 1},
        {id: 4, property_id: 4, tenant_id: 5, manager_id: 1 ,contract_id: 1},
        {id: 5, property_id: 5, tenant_id: 6, manager_id: 1 ,contract_id: 1},
        {id: 6, property_id: 6, tenant_id: 7, manager_id: 1 ,contract_id: 1},
        {id: 7, property_id: 7, tenant_id: 8, manager_id: 1 ,contract_id: 1},
        {id: 8, property_id: 8, tenant_id: 9, manager_id: 1 ,contract_id: 1},
        {id: 9, property_id: 9, tenant_id: 10, manager_id: 1 ,contract_id: 1}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('properties_users_id_seq', (SELECT MAX(id) FROM properties_users));`
      );
    });
};
