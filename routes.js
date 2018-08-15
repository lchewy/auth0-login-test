const passport = require("passport");
require("./passport");

module.exports = app => {
  app.get("/api/login", passport.authenticate("auth0", {scope:"openid profile"}), (req, res, next) => {
    res.redirect("/");
  });

  app.get(
    "/api/callback",
    passport.authenticate("auth0", { failureRedirect: "/failed" }),
    (req, res, next) => {
      if (!req.user) {
        throw new Error("user null");
      }
      res.redirect("/");

    }
  );

  app.get("/api/logout", (req, res, next) => {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current_user", (req, res, next) => {
    res.send(req.user);
  });
};
