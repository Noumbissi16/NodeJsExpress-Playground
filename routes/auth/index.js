const express = require("express");
const passport = require("passport");
const authRouter = express.Router();
authRouter.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

authRouter.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication, redirect home.
    const user = req.user;
    console.log(user);
    // res.redirect("/");
  }
);

authRouter.get("/logout", (req, res) => {
  res.send("Failed to login");
});

module.exports = authRouter;
