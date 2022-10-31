const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index", { name: "Jericho" });
// });

//let listOfNames = ["Jericho", "John", "Jane", "Jill"];


let html = "<h1>Hello, I am HTML</h1>";

app.get("/", (req, res) => {
  res.render("index", { name: html });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
