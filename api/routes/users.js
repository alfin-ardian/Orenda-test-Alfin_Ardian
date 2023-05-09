var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = router;
