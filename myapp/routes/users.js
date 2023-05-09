const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Create user
router.post("/", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Get all users
router.get("/", async (req, res) => {
  try {
    // const users = await User.findAll();
    // res.json(users);
    const users = await User.findAll();
    res.json(users);

    // res.status(200).send("Hello World!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
