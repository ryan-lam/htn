const fs = require("fs");
const path = require("path");
const { User, Skills } = require("../models");
const data = require("./data.js");

const main = async () => {
  data.forEach(async (d) => {
    await User.create(d);
    d.skills.forEach(async (userskill) => {
      await Skills.create({
        userId: d.id,
        skill: userskill.skill,
        rating: userskill.rating,
      });
    });
  });
};

main();
