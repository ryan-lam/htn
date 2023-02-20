var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  res.send("GET route on things.");
});

router.post("/", (req, res, next) => {
  res.send("POST route on things.");
});

module.exports = router;
