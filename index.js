require("dotenv").config();
const express = require("express");
const cookieSession = require("cookie-session");
const passport = require("passport");
const cors = require("cors");
const passportSetUp = require("./passport");
// const { default: authRouter } = require("./routes/auth");
const authRouter = require("./routes/auth/index");
const app = express();
const port = process.env.PORT || 5000;
app.use(
  cookieSession({
    name: "session",
    keys: ["cyberwolve"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
