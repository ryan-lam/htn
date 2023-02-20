const express = require("express");
var usersRouter = require("./routes/users.js");

const app = express();
app.use("/users", usersRouter);

app.get("/", (req, res, next) => {
  res.send("Hello World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
