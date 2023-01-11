const express = require("express");
const Router = express.Router();
const Auth = require("../models/auth");
const bcrypt = require("bcryptjs");
const saltRounds = 10;

//sign in
Router.post("/signin", (req, res) => {
  let { email, password } = req.body;
  Auth.findOne({ email: email }, (err, user) => {
    if (user) {
      bcrypt.compareSync(password, user.password)
        ? res.send({ message: "Login Successful", userInfo: user })
        : res.status(400).send({ message: "Invalid credentials" });
      if (password === user.password) {
      } else {
      }
    } else {
      res.status(400).send({
        status: 400,
        message: "No user found with this email, please register",
      });
    }
  });
});

//sign up
Router.post("/signup", (req, res) => {
  let { password, email, phoneNumber, firstName, lastName } = req.body;
  Auth.findOne({ email: email }, (err, user) => {
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);

    console.log(user, "looging user");

    if (user) {
      res.send({
        message: "User Already existed in Database, Please sign in",
        user,
      });
    } else {
      const user = new Auth({
        firstName,
        lastName,
        password: hashPassword,
        email,
        phoneNumber,
      });
      user
        .save()
        .then(() =>
          res.send({
            message: "User saved successfully, Please login to continue",
            user,
          })
        )
        .catch((err) => res.status(400).send({ message: err }));
    }
  });
});

module.exports = Router;
