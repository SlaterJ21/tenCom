
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('properties').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
        {id: 1, AddressLine1: '628 Barbery Dr', addressline2: 'apt1', city: 'Longmont', state: 'Colorado', postalcode: 80503 },
        {id: 2, AddressLine1: '4030 Savannah Ct', addressline2: 'apt4', city: 'Boulder', state: 'Colorado', postalcode: 80301},
      ]);
    });
};
