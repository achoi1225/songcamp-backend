const express = require("express");

const { asyncHandler } = require("../utils");
const { Album, Track, User } = require("../../db/models");

const router = express.Router();

// GET all albums with users and tracks data
router.get('/', asyncHandler(async (req, res) => {

  const allAlbums = await Album.findAll({
    include: [
        {model: User, attributes: {exclude: ['email','hashedPassword']}},
        {model: Track }
    ]
  })

  res.json({allAlbums});

}))


// GET ONE album with user and tracks data
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

    const album = await Album.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {model: User, attributes: {exclude: ['email','hashedPassword']}},
            {model: Track }
        ]
    })
  
    res.json({album});
  
  }))

module.exports = router;