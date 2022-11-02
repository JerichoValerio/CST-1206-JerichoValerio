//* monolith is a single service
// for example github.com -> 4 different projects(your code is inside one repo)
// what if repo deleted, all are gone == monolith architecture <- if one server is done, there is still more
// can assign different engineers to different servers

const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.get("", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});

app.post("/register", (req, res) => {
  res.render("success");
});

app.get("/success", (req, res) => {
  res.render("success", {
    name: "Jericho",
    email: "jerichovalerio@noogler.com",
    contactnumber: "778-721-0831",
  });
});

app.listen(PORT, () => {
  console.log(`Server Running at port ${PORT}`);
});
