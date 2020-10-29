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
];

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


  // SIGN UP - SEND TOKEN AND USER INFO
  router.post("/",
    signupValidations,
    sharedAuthValidations,
    handleValidationErrors,
    asyncHandler(async(req, res) => {
      const {
        userName,
        email,
        password,
        artist,
        bio,
        imgUrl
      } = req.body;
      
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create(
      {
        userName,
        email,
        hashedPassword,
        artist,
        bio,
        imgUrl
      }
    );

    const token = await getUserToken(user);
    res.cookie("accessToken", token, { httpOnly: true });

    res.status(201).json({
      user: { id: user.id, userName: user.userName },
      token
    });
  })
);



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
    res.json({ token, user: { id: user.id, userName: user.userName }});
  })
);

// DELETE TOKEN
router.delete("/token", asyncHandler(async(req, res, next) => {
  res.clearCookie("accessToken");
  res.status(200).end();
}))


module.exports = router;