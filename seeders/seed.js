const fs = require("fs");
const path = require("path");
const { User, Skills } = require("../models");
const data = require("./data.js");

const main = async () => {
  data.forEach((d) => {
    delete d.skills;
  });
  await User.bulkCreate(data);
};

main();
