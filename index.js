const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "there" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on Port ${PORT}`);
});
