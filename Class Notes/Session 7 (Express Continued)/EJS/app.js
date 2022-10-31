const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index", { name: "Jericho" });
// });

let listOfNames = ["Jericho", "John", "Jane", "Jill"];

app.get("/", (req, res) => {
  res.render("index", { name: listOfNames });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
