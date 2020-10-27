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
          artistId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Forget the Milk',
          releaseDate: new Date('2020','4','23'),
          imgUrl: null,
          description: 'Heavy synth pop that explores a picture of life with higher priorities',
          credit: 'Synth: Dexter, Cowbell: Ferrel',
          artistId: 4,
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
