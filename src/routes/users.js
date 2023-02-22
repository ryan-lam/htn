const express = require("express");
const { User, Skills } = require("../../models");

var router = express.Router();

const getUserById = async (id) => {
  const user = await User.findOne({
    where: { id: id },
    include: [
      {
        model: Skills,
      },
    ],
  });
  return user;
};

router.get("/", async (req, res, next) => {
  const users = await User.findAll({
    include: [
      {
        model: Skills,
      },
    ],
  });
  res.send(users);
});

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const user = await getUserById(id);
  return res.send(user);
});

router.post("/:id", async (req, res, next) => {
  const { id } = req.params;
  console.log(typeof id);
  const { name, company, email, phone, Skills: skills } = req.body;
  skills.forEach(async (s) => {
    const savedSkill = await Skills.findOne({
      where: {
        userId: id,
        skill: s.skill,
      },
    });
    if (savedSkill) {
      savedSkill.rating = s.rating;
      await savedSkill.save();
    } else {
      const user = await getUserById(id);
      const addUserSkill = await user.createSkill({
        skill: s.skill,
        rating: s.rating,
      });
    }
  });
  var user = await User.update(
    {
      name: name,
      company: company,
      email: email,
      phone: phone,
    },
    { where: { id: id } }
  );
  user = await getUserById(id);

  return res.send(user);
});

module.exports = router;
