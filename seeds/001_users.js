
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, first_name: 'Jeff', last_name: 'Slater', phone_number: 5165513722, email: 'slater.jeff7@gmail.com', password: '$2a$10$7g.Z824wl7CS0TIxjbpS.e4HKYKXOltK.pVpIebs/iIwRUOtU/Xja', ispm: true},
        {id: 2, first_name: 'Johnny', last_name: 'Castillo', phone_number: 9549989650, email: 'johnnycast@gmail.com', password: '$2a$10$j89rDRNfazAetK3FErOnZ.pZoeYeoZoXZgi7cFLw4Dyk6MV1HWlTG', ispm: false},
<<<<<<< HEAD
        {id: 3, first_name: 'John', last_name: 'Stephens-Webb', phone_number: 3036467096, email: 'jsw2288@gmail.com', password: '$2a$10$j89rDRNfazAetK3FErOnZ.pZoeYeoZoXZgi7cFLw4Dyk6MV1HWlTG', ispm: true}
=======
        {id: 3, first_name: 'John', last_name: 'Stephens-Webb', phone_number: 3036467096, email: 'jsw2288@gmail.com', password: '$2a$10$j89rDRNfazAetK3FErOnZ.pZoeYeoZoXZgi7cFLw4Dyk6MV1HWlTG', ispm: false},
        {id: 4, first_name: 'Ana', last_name: 'Gates', phone_number: 7735502354, email: 'anagates1@gmail.com', password: '$2a$10$7g.Z824wl7CS0TIxjbpS.e4HKYKXOltK.pVpIebs/iIwRUOtU/Xja', ispm: true},
        {id: 5, first_name: 'Marcelo', last_name: 'Castillo', phone_number: 9329949334, email: 'marcelo666@gmail.com', password: '$2a$10$j89rDRNfazAetK3FErOnZ.pZoeYeoZoXZgi7cFLw4Dyk6MV1HWlTG', ispm: false},
        {id: 6, first_name: 'Melissa', last_name: 'Trump', phone_number: 2026992345, email: 'trumptowers@gmail.com', password: '$2a$10$j89rDRNfazAetK3FErOnZ.pZoeYeoZoXZgi7cFLw4Dyk6MV1HWlTG', ispm: true},
        {id: 7, first_name: 'Matthew', last_name: 'Williams', phone_number: 9542352663, email: 'mwilliams@gmail.com', password: '$2a$10$7g.Z824wl7CS0TIxjbpS.e4HKYKXOltK.pVpIebs/iIwRUOtU/Xja', ispm: true},
        {id: 8, first_name: 'Donald', last_name: 'Clinton', phone_number: 2024594955, email: 'potus@gmail.com', password: '$2a$10$j89rDRNfazAetK3FErOnZ.pZoeYeoZoXZgi7cFLw4Dyk6MV1HWlTG', ispm: false},
        {id: 9, first_name: 'Bill', last_name: 'Slim', phone_number: 2954338996, email: 'bslim12@gmail.com', password: '$2a$10$j89rDRNfazAetK3FErOnZ.pZoeYeoZoXZgi7cFLw4Dyk6MV1HWlTG', ispm: true},
        {id: 10, first_name: 'Tommy', last_name: 'Simmons', phone_number: 7737726663, email: 'tommy5@gmail.com', password: '$2a$10$7g.Z824wl7CS0TIxjbpS.e4HKYKXOltK.pVpIebs/iIwRUOtU/Xja', ispm: true}

>>>>>>> 18600ba750947b8930725127611d078e9560749c
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`
      )
    });
};
