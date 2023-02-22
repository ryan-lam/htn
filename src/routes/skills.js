const express = require("express");
const Sequelize = require("Sequelize");
const { User, Skills } = require("../../models");
const sequelize = require("../client");

var router = express.Router();

router.get("/", async (req, res, next) => {
  var { min_frequency, max_frequency } = req.query;
  min_frequency ??= 0;
  max_frequency ??= 1000000;
  const [results, metadata] = await sequelize.query(
    `SELECT * FROM 
    (SELECT COUNT(skill) as frequency, skill as name FROM Skills GROUP BY skill) as skill_count 
    where skill_count.frequency >= ${min_frequency} and skill_count.frequency <= ${max_frequency};`
  );
  return res.send(results);
});

module.exports = router;
