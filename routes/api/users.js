const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const multer = require("multer");
const upload = multer();

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
      
      res.json({ user });
      
    }))
    
    
// Make edits to user data
router.patch('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const user = await User.findOne({
        where: {
            id: req.params.id
          },
        });
      
        let updatedUser;

        if (user) {
            if(req.body.hasOwnProperty("imgUrl")) {
                console.log("imgurl confirmed")
                updatedUser = await user.update({ imgUrl: req.body.imgUrl });

            }
            if (req.body.hasOwnProperty("bio")) {
                console.log("bio confirmed")
                updatedUser = await user.update({ bio: req.body.bio });
            }
              res.json({ updatedUser });

            } else {
                console.log('Error from api/user/PUT - user not found!')
                // next(listNotFoundError(req.params.id));
            }
}));
                  

// AWS
const AWS = require("aws-sdk");
const { awsKeys } = require("../../config");

AWS.config.update({
  secretAccessKey: awsKeys.secretAccessKey,
  accessKeyId: awsKeys.accessKeyId,
  region: awsKeys.region,
}); // UPDATING CONFIG FOR S3

const s3 = new AWS.S3(); // CONSTRUCTS A SERVICE OBJECT

const imgFileFilter = (req, res, next) => {
  const file = req.files[0];
  if(file.mimetype === "image/jpeg" || file.mimetype === "image/jpg" || file.mimetype === "image/png") {
    next();
  } else {
    next({ status: 422, errors: ["invalid Mime Type - only JPEG and PNG"]});
  }
};

router.put("/:id/photos", 
  upload.any(),
  imgFileFilter,
  asyncHandler( async(req, res, next) => {

    console.log("INSIDE PHOTOS ROUTER!!!!")
    // GET FILE REFERENCE
    const file =req.files[0];

    //CREATE PARAMS OBJECT FOR S3
    const params = {
      Bucket: "songcamp-images",
      Key: Date.now().toString() + file.originalname,
      Body: file.buffer,
      ACL: "public-read",
      ContentType: file.mimetype,
    };

    // CREATE A PROMISE FROM THE UPLOAD
    const promise = s3.upload(params).promise(); 

    const uploadedImage = await promise;

    // GET URL OF THE FILE AND PUT IT IN THE REQUEST OBJECT FOR LATER USE
    req.body.imgUrl = uploadedImage.Location;

    console.log("REQ BODY IMG URL!!!", req.body.imgUrl);

    const user = await User.findOne({
          where: {
            id: req.params.id
          },
        });

    
    if(!user) {
      console.log('Error from api/user/PUT - user not found!')
    // next(listNotFoundError(req.params.id));
    } else {
      const updatedUser = await user.update(req.body);
      console.log("PHOTO UPLOAD SUCCESSFUL!");
      console.log("UPDATED USER!!!! ", updatedUser);
      res.json({updatedUser});
    }
    
  })
)
              
module.exports = router;