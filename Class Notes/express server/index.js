const express = require("express");

const app = express();
const PORT = 4000;
const student = [];

app.get("/", (req, res) => {
  res.send("Welcomeyo student APIS!");
});

app.get('/students', () => {
    // for get requests we give 200 success response
   const data = res.status(200);
   return data.json(student)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
