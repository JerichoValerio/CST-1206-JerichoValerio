//* monolith is a single service
// for example github.com -> 4 different projects(your code is inside one repo)
// what if repo deleted, all are gone == monolith architecture <- if one server is done, there is still more
// can assign different engineers to different servers

const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index", { name: "Jericho" });
// });

//let listOfNames = ["Jericho", "John", "Jane", "Jill"];

// let html = "<h1>Hello, I am HTML</h1>";

// app.get("/", (req, res) => {
//   res.render("index", { name: html });
// });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
