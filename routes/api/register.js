const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs')
const Farmer = require('../../models/Farmer')
const jwt = require('jsonwebtoken')
const config = require('config')

//@route POST api/profile
//@desc Create or update user profile
//@access Private
router.post(
  "/",
  [
    [
      check("name", "Name is required").not().isEmpty(),
      check("email", "Email is required").not().isEmpty(),
      check("password", "Password is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        name,
        email,
        password,
      } = req.body;

      //Build Profile Object


      const user = await Farmer.findOne({ email: email });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      //Create
      const newUser = {
        name,
        email,
        password,
      };
      const farmer = await new Farmer(newUser).save();
      res.status(200).json({ msg: 'User Created', data: farmer });

    } catch (error) {
      console.error(error.message);
      res.status(500).json({ msg: "Server error" });
    }
  }
);
module.exports = router;
