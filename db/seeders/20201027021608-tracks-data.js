'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tracks = await queryInterface.bulkInsert(
      "Tracks",
      [
        {
          title: 'Cup of Java',
          albumId: 1,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Potato Mash",
          albumId: 1,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "It All started in July",
          albumId: 2,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Recursive Nightmare",
          albumId: 2,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 3 Track",
          albumId: 3,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 4 Track",
          albumId: 4,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 5 Track",
          albumId: 5,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 6 Track",
          albumId: 6,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 7 Track",
          albumId: 7,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 8 Track",
          albumId: 8,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 9 Track",
          albumId: 9,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 10 Track",
          albumId: 10,
          allowDownload: false,
          trackUrl: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 10 Track 2",
          albumId: 10,
          allowDownload: false,
          trackUrl: "",
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