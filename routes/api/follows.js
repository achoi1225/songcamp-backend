const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { Follower, User } = require("../../db/models");


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const userId = parseInt(req.params.id, 10);
    const following = await Follower.findAll({
        where: {
            userId: userId
        },
        include: [
            {model: User, attributes: {exclude: ['email','hashedPassword']}},
        ]
    })
    
    // console.log("FOLLOWING!!!", following[0].followingId)
    res.json({...following});    
}));


router.post(`/:id(\\d+)`, asyncHandler( async(req, res) => {
    const userId = parseInt(req.params.id);
    const { followingId } = req.body;

    console.log("FOLLOWING ID!!!!", req.body);

    const newFollow = await Follower.create({
        userId,
        followingId
    })

    res.json({newFollow});
}))

module.exports = router;