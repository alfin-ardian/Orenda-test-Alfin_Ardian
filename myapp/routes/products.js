const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// Create product
router.post("/", async (req, res) => {
  try {
    const { name, unit, price } = req.body;
    const product = await Product.create({ name, unit, price });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
