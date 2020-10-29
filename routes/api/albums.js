const express = require("express");

const { asyncHandler } = require("../utils");
const { Album, Track, User } = require("../../db/models");

const router = express.Router();


router.get('/', asyncHandler(async (req, res) => {

  const allAlbums = await Album.findAll({
    include: [
        {model: User, attributes: {exclude: ['email','hashedPassword']}},
        {model: Track }
    ]
  })

  res.json({allAlbums});

}))

module.exports = router;