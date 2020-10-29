'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const followers = await queryInterface.bulkInsert(
      "Followers",
      [
        {
          userId: 11,
          followerId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          followerId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 13,
          followerId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 14,
          followerId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 15,
          followerId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 16,
          followerId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 17,
          followerId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 18,
          followerId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 19,
          followerId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 20,
          followerId: 10,
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
