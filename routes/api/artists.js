const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");


const { asyncHandler, handleValidationErrors } = require("../utils");
const { getUserToken } = require("../../auth");
const { User } = require("../../db/models");

const router = express.Router();

const signupValidations = [
  check("userName")
    .exists({ checkFalsy: true })
    .withMessage("A username is required.")
    .isLength({ min: 3, max: 50 })
    .withMessage("A username must be between 3 and 50 characters."),
  check("artistName")
    .exists({ checkFalsy: true })
    .withMessage("Artist/Band name is required.")
    .isLength({ max: 50 })
    .withMessage("Artist/Band name must not be longer than 50 characters."),
  check("genre")
    .exists({ checkFalsy: true })
    .withMessage("Please choose a genre.")
];

const sharedAuthValidations = [
  check("email")
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage("A valid email address is required.")
    .isLength({ max: 100 })
    .withMessage("Email address must be less than 100 characters."),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("User password is required."),
];


  // SIGN UP - SEND TOKEN AND USER INFO
  router.post("/",
    signupValidations,
    sharedAuthValidations,
    handleValidationErrors,
    asyncHandler(async(req, res, next) => {
      const {
        userName,
        email,
        password,
        artist,
        artistName,
        genre,
      } = req.body;
      
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create(
      {
        userName,
        email,
        hashedPassword,
        artist,
        artistName,
        genre,
        bio: null,
        imgUrl: null
      }
    );

    const token = await getUserToken(user);
    res.cookie("accessToken", token, { httpOnly: true });

    res.status(201).json({
      user: { id: user.id, userName: user.userName, },
      token
    });
  })
);

module.exports = router;
