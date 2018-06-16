
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('properties_users').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties_users').insert([
        {id: 1, property_id: '4', tenant_id: 2, contract_id: 3},
        {id: 2,  property_id: '2', tenant_id: 3, contract_id: 4},
      ]);
    });
};
