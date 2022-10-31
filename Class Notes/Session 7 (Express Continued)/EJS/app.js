const express = require("express");
const app = express();
const PORT = 5000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { name: "Jericho" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
