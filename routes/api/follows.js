const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { Follower } = require("../../db/models");


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.id, 10);
    const following = await Follower.findAll({
        where: {
            userId: userId
        }
    })
    
    res.json({following});    
}));

router.post(`/:id(\\d+)`, asyncHandler( async(req, res) => {
    const userId = parseInt(req.params.id);
    const followingId = parseInt(req.body.followingId);

    console.log("FOLLOWING ID!!!!", followingId);

    const follow = await Follower.create({
        userId,
        followingId
    })

    res.json({follow})
}))

module.exports = router;