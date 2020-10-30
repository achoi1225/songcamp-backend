'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tracks = await queryInterface.bulkInsert(
      "Tracks",
      [
        {
          title: 'Cup of Java',
          albumId: 1,
          allowDownload: true,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/01+24K+Magic.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Potato Mash",
          albumId: 1,
          allowDownload: true,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/01+WILD.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "It All started in July",
          albumId: 2,
          allowDownload: true,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/2-07+Got+'Til+It's+Gone.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Recursive Nightmare",
          albumId: 2,
          allowDownload: true,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/02+Tiny+Dancer.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 3 Track",
          albumId: 3,
          allowDownload: false,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/05+Doo+Wop+(That+Thing).m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 4 Track",
          albumId: 4,
          allowDownload: false,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/05+Heartbreak+on+a+Full+Moon.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 5 Track",
          albumId: 5,
          allowDownload: false,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/05+Solo.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 6 Track",
          albumId: 6,
          allowDownload: false,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/06+Billie+Jean.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 7 Track",
          albumId: 7,
          allowDownload: false,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/06+Jeremy.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 8 Track",
          albumId: 8,
          allowDownload: false,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/07+Black+Hole+Sun.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 9 Track",
          albumId: 9,
          allowDownload: false,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/1-04+Weathered.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 10 Track",
          albumId: 10,
          allowDownload: false,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/02+bad+guy.m4a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Artist 10 Track 2",
          albumId: 10,
          allowDownload: false,
          trackUrl: "https://songcamp-preloaded-audio.s3.amazonaws.com/04+you+should+see+me+in+a+crown.m4a",
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