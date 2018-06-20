
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contracts').insert([
        {id: 1, rent: 400,status: true,contract: 'closed'},
        {id: 2, rent: 600,status: false,contract: 'open'},
      ]);
    }).then(() => {
      return knex.raw(
        'SELECT setval(`contracts_id_seq`, (SELECT MAX(id) FROM contracts));'
      );
    });
};
