'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const followers = await queryInterface.bulkInsert(
      "Followers",
      [
        {
          userId: 1,
          followerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          followerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 3,
          followerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          followerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );

    return followers;
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Followers', null, {});
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
