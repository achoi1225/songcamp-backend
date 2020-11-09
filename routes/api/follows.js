const express = require("express");
const router = express.Router();
const { asyncHandler } = require("../utils");
const { Follower, User } = require("../../db/models");
const { authCheck } = require("../../auth");

//Following Not Found Error
const follwoingNotFoundError = (id) => {
    const err = Error("Following not found");
    err.errors = [`Following with the id of ${id} could not be found`];
    err.title = 'Following not found';
    err.status = 404;
    return err;
}

router.use(authCheck);

router.get('/', asyncHandler(async(req, res) => {
    const userId = parseInt(req.user.id, 10);
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


router.delete("/:id(\\d+)", asyncHandler( async(req, res, next) => {
    const id = parseInt(req.params.id);

    console.log("INSIDE DELETE!!")
    const following = await Follower.findByPk(id);

    if(following) {
        console.log("following!!", following);
        await following.destroy();
        res.status(204).end();
    } else {
        console.log("Cannot find tweet to delete");
        next(followingNotFoundError(id));
    }
}))

module.exports = router;