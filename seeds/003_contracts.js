
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contracts').insert([
        {id: 1, rent: 400,status: true,contract: 'closed', link:'http://alcfes.info/wp-content/uploads/2018/03/hall-rental-agreement-template-simple-rental-agreement-template-word-kidscareer-download.jpg'},
        {id: 2, rent: 600,status: false,contract: 'open', link: ''},
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('contracts_id_seq', (SELECT MAX(id) FROM contracts));`
      );
    });
};
