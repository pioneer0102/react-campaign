const express = require("express");
const mongoose = require("mongoose");
const { mongoURI } = require("./config/keys");
require("./services/passport");
require("./models/User");

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true }
);

const app = express();

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is up on Port ${PORT}`);
});
