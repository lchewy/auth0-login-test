const passport = require("passport");
require("./passport")

module.exports = app => {
  app.get("/login", passport.authenticate("auth0", {}), (req, res, next) => {
    res.redirect("/");
  });

  app.get(
    "/callback",
    passport.authenticate("auth0", { failureRedirect: "/login" }),
    (req, res, next) => {
      if (!req.user) {
        throw new Error("user null");
      }
      res.redirect("/");
    }
  );

  app.get("/logout", (req, res, next) => {
    req.logout(); 
    res.redirect("/");
  });

};
