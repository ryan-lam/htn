const express = require("express");
const { User, Skills } = require("../models");
const usersRouter = require("./routes/users.js");
const skillsRouter = require("./routes/skills.js");

const app = express();

app.use(express.json());
app.use("/users", usersRouter);
app.use("/skills", skillsRouter);

app.get("/", async (req, res, next) => {
  res.send("Hello world!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
