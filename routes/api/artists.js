const express = require("express");

const { asyncHandler } = require("../utils");
const { User } = require("../../db/models");

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {

  const allArtists = await User.findAll({
    where: {
      artist: true,
    }
  })

  const allArtistsFiltered = allArtists.map((artist) => {
    return { artistName: artist.artistName, bio: artist.bio, imgUrl: artist.imgUrl,}
  });

  res.json({allArtistsFiltered})

}))


module.exports = router;
