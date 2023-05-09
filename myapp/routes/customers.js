const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

// Create customer
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;
    const customer = await Customer.create({ name, phone, email, address });
    res.json(customer);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Get all customers
router.get("/", async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
