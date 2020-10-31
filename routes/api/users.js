const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");

const { asyncHandler, handleValidationErrors } = require("../utils");
const { getUserToken } = require("../../auth");
const { User } = require("../../db/models");

const router = express.Router();

const sharedAuthValidations = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("A valid email address is required")
    .isLength({ max: 100 })
    .withMessage("Email address must be less than 100 characters"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("User password is required"),
];

// SIGN IN - SEND TOKEN AND USER INFO
router.post("/token", sharedAuthValidations,
  asyncHandler(async(req, res, next) => {
    const { email, password } = req.body;
    const user = await User.findOne(
      {
        where: { email }
      }
    );

    if (!user || !user.validatePassword(password)) {
      const error = new Error("Invalid credentials");
      error.status = 401;
      error.title = "Invalid credentials";
      error.errors = ["Unable to authenticate provided information. Please check user name and/or password."];
      return next(error);
    }

    const token = getUserToken(user);
    res.cookie("accessToken", token, { httpOnly: true });
    res.json({ token, user: { id: user.id, userName: user.userName, artistName: user.artistName, artist: user.artist, imgUrl: user.imgUrl }});
  })
);


// GET user data 
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {

  const user = await User.findOne({
      where: {
          id: req.params.id,
        },
      attributes: {exclude: ['email','hashedPassword']}
  })

  res.json({user});

}))

module.exports = router;