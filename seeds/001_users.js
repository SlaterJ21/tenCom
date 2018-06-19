
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Jeff', last_name: 'Slater', phone_number: 5165513722, email: 'slater.jeff7@gmail.com', password: '$2a$10$7g.Z824wl7CS0TIxjbpS.e4HKYKXOltK.pVpIebs/iIwRUOtU/Xja', ispm: true},
        {id: 2, first_name: 'Johnny', last_name: 'Castillo', phone_number: 9549989650, email: 'johnnycast@gmail.com', password: '$2a$10$j89rDRNfazAetK3FErOnZ.pZoeYeoZoXZgi7cFLw4Dyk6MV1HWlTG', ispm: false},
        {id: 3, first_name: 'John', last_name: 'Stephens-Webb', phone_number: 3036467096, email: 'jsw2288@gmail.com', password: '$2a$10$j89rDRNfazAetK3FErOnZ.pZoeYeoZoXZgi7cFLw4Dyk6MV1HWlTG', ispm: true}
      ]);
    });
};
