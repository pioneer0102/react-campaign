const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");

const { mongoURI, cookieKey } = require("./config/keys");
const PORT = process.env.PORT || 3000;

require("./models/User");
require("./services/passport");

const app = express();

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true }
);

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.listen(PORT, () => {
  console.log(`Server is up on Port ${PORT}`);
});
