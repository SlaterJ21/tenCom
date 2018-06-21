
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('properties').del()
    .then(function () {
      // Inserts seed entries
      return knex('properties').insert([
        {id: 1, addressline1: '628 Barbery Dr', addressline2: 'apt1', city: 'Longmont', state: 'Colorado', postalcode: 80503, img: 'https://maac-cdn.azureedge.net/~/media/images/slides/large/home-page-slider-220.ashx' },
        {id: 2, addressline1: '4030 Savannah Ct', addressline2: 'apt4', city: 'Boulder', state: 'Colorado', postalcode: 80301, img: 'http://www.vaidyahomeskollam.com/images/resource/appartment.jpg'},
        {id: 3, addressline1: '5550 Addison St', addressline2: 'apt1', city: 'Chicago', state: 'Illinois', postalcode: 60629, img: 'https://images1.apartments.com/i2/1OOQUIGr7qvTa_S7hhK0-6Ql72tCjw0De-qpI6d1UKg/111/clintwood-apartments-rochester-ny-community.jpg'},
        {id: 4, addressline1: '4940 Damen St', addressline2: 'apt5', city: 'Chicago', state: 'Illinois', postalcode: 60609, img: 'https://s-ec.bstatic.com/images/hotel/max1280x900/782/78217563.jpg'},
        {id: 5, addressline1: '307 W 32rd St', addressline2: 'apt301', city: 'Houston', state: 'Texas', postalcode: 77008, img: 'https://sprinklesonsprinkles.files.wordpress.com/2012/08/ghetto.jpeg'},
        {id: 6, addressline1: '1409 Montrose Rd', addressline2: 'apt45', city: 'Chicago', state: 'Illinois', postalcode: 60630, img: 'https://www.thelocal.fr/userdata/images/article/9bbe15f3bdd3a05ae2384b58d4fc24f1d972d39b8f34008fb77aca7ca92a1830.jpg'},
        {id: 7, addressline1: '321 W 87th St', addressline2: 'apt22', city: 'Chicago', state: 'Illinois', postalcode: 60005, img: 'https://media.architecturaldigest.com/photos/58fe1f1b23a40a3a3ac7bc57/4:3/w_384/Dakota_History_GettyImages-548853145.jpg'},
        {id: 8, addressline1: '2010 Savannah Ct', addressline2: 'apt1', city: 'Boulder', state: 'Colorado', postalcode: 80301, img: 'https://res.cloudinary.com/apartmentlist/image/upload/t_fullsize/8b72b8e2a8b7840da4571c055a4e8762.jpg'},
        {id: 9, addressline1: '333 Barbery Dr', addressline2: 'apt1', city: 'Longmont', state: 'Colorado', postalcode: 80503, img: 'https://i.pinimg.com/originals/60/56/84/605684f0a2c4e89c4a6ad370bf655196.jpg'}
      ]);
    }).then(() => {
      return knex.raw(
        `SELECT setval('properties_id_seq', (SELECT MAX(id) FROM properties));`
      );
    });
};
