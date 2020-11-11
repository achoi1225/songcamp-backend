
const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { Genre } = require("../../db/models");

router.get('/', asyncHandler(async(req, res) => {
    const genres = await Genre.findAll({
        // attributes: {exclude: ['email','hashedPassword']}
        attributes: ['id', 'type']
    });
    
    // console.log("FOLLOWING!!!", following[0].followingId)
    res.json({genres});    
}));

module.exports = router;