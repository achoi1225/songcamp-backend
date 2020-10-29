'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const albums = await queryInterface.bulkInsert(
      "Albums",
      [
        {
          title: 'Better Than Gravy',
          releaseDate: new Date('2020','10','10'),
          imgUrl: null,
          description: 'The best album of all time',
          credit: 'All composed by: Mr. Fox',
          artistId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Forget the Milk',
          releaseDate: new Date('2020','4','23'),
          imgUrl: null,
          description: 'Heavy synth pop that explores a picture of life with higher priorities',
          credit: 'Synth: Dexter, Cowbell: Ferrel',
          artistId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Artist 3 Album',
          releaseDate: null,
          imgUrl: null,
          description: 'Artist 3 Album Description goes here!',
          credit: 'Artist 3 Album Credits go here!',
          artistId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Artist 4 Album',
          releaseDate: null,
          imgUrl: null,
          description: 'Artist 4 Album Description goes here!',
          credit: 'Artist 4 Album Credits go here!',
          artistId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Artist 5 Album',
          releaseDate: null,
          imgUrl: null,
          description: 'Artist 5 Album Description goes here!',
          credit: 'Artist 5 Album Credits go here!',
          artistId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Artist 6 Album',
          releaseDate: null,
          imgUrl: null,
          description: 'Artist 6 Album Description goes here!',
          credit: 'Artist 6 Album Credits go here!',
          artistId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Artist 7 Album',
          releaseDate: null,
          imgUrl: null,
          description: 'Artist 7 Album Description goes here!',
          credit: 'Artist 7 Album Credits go here!',
          artistId: 17,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Artist 8 Album',
          releaseDate: null,
          imgUrl: null,
          description: 'Artist 8 Album Description goes here!',
          credit: 'Artist 8 Album Credits go here!',
          artistId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Artist 9 Album',
          releaseDate: null,
          imgUrl: null,
          description: 'Artist 9 Album Description goes here!',
          credit: 'Artist 9 Album Credits go here!',
          artistId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Artist 10 Album',
          releaseDate: null,
          imgUrl: null,
          description: 'Artist 10 Album Description goes here!',
          credit: 'Artist 10 Album Credits go here!',
          artistId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );

    return albums;
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Albums', null, {});
  }
};


// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkInsert('People', [{
//         name: 'John Doe',
//         isBetaMember: false
//       }], {});
//     */
//   },

//   down: (queryInterface, Sequelize) => {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.

//       Example:
//       return queryInterface.bulkDelete('People', null, {});
//     */
//   }
// };
