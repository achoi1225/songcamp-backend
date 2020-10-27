'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tracks = await queryInterface.bulkInsert(
      "Tracks",
      [
        {
          title: 'Pour it up',
          albumId: 1,
          allowDownload: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Potato Mash",
          albumId: 1,
          allowDownload: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "One Drink Away",
          albumId: 2,
          allowDownload: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Bigger Picture",
          albumId: 2,
          allowDownload: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );

    return tracks;
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Tracks', null, {});
  }
};