//external requires
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const { ValidationError } = require("sequelize");
const cookieParser = require('cookie-parser');
const bearerToken = require('express-bearer-token');
const path = require("path");


// internal requires

const { environment, cookieConfig } = require("./config");
// const { userValidation } = require("./auth");

const usersRouter = require("./routes/api/users");

// const { Server } = require("http");

const app = express();


//app.use(bearerToken({ cookie: {signed: true, secret, key: accessToken}}));
// app.set("view engine", "pug");

//external use statements
app.use(cors({ origin: true }));
app.use(morgan("dev"));
app.use(cookieParser(cookieConfig));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencode
app.use(express.static(path.join(__dirname, "public")));


//internal use statements
app.use("/api/users", usersRouter);

// unhandled requests
  app.use((req, res, next) => {
    const error = new Error("Resource could not be found.");
    error.errors = ["Resource could not be found."];
    error.status = 404;
    // res.render("404page");  //create 404 add button to go to home
  });

//sequelize errors
app.use((error, req, res, next) => {
  if(error instanceof ValidationError) {
    error.errors = error.errors.map((err) => err.message);
    error.title = "Sequelize Error";
  };
  next(error);
});

//general error handler
app.use((error, req, res, next) => {
  console.log(error)
  res.status(error.status || 500);
  const isProduction = environment === "production";
  res.json({
    title: error.title || "Server Error",
    errors: error.errors,
    stack: isProduction ? null : error.stack
  });
});

module.exports = app;
