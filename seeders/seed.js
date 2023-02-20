const fs = require("fs");
const path = require("path");
const { User, Skills } = require("../models");
const data = require("./data.js");

const createUser = async (data) => {
  const user = await User.create(data);
  data.skills.forEach(async (s) => {
    await user.createSkill({
      skill: s.skill,
      rating: s.rating,
    });
  });
};

const main = async () => {
  data.forEach(async (user) => {
    await createUser(user, user.skills);
  });
};

main();
