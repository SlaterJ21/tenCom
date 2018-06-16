
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Jeff', last_name: 'Slater', phone_number: 5165513722, email: 'slater.jeff7@gmail.com', password: 'caca123', ispm: false},
        {id: 2, first_name: 'Johnny', last_name: 'Castillo', phone_number: 9549989650, email: 'johnnycast@gmail.com', password: 'caca124', ispm: true}
      ]);
    });
};
