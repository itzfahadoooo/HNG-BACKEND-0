const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "foyindolapo@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/itzfahadoooo/HNG-BACKEND-0",
  });
});

app.listen(PORT, () => {
  console.log("Server started at http://localhost:" + PORT);
});
