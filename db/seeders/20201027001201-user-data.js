'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: 'tester1@test.com',
          userName: 'tester1',
          hashedPassword: bcrypt.hashSync('password123', 10),
          artist: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'tester2@test.com',
          userName: 'tester2',
          hashedPassword: bcrypt.hashSync('password123', 10),
          artist: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'tester3@test.com',
          userName: 'tester3',
          artist: false,
          hashedPassword: bcrypt.hashSync('password123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: 'demo@dftm.com',
          userName: 'Demo',
          artist: true,
          hashedPassword: bcrypt.hashSync('demo123', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      // {returning: true}
    );

    return users;
  },

  down: async (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('Users', null, {});
    // await queryInterface.bulkDelete('Lists', null, {});
    return queryInterface.bulkDelete('Users', null, {});
  }
};