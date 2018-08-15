const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const keys = require("./config/keys")

const strategy = new Auth0Strategy(
  {
    domain: keys.domain,
    clientID: keys.clientID,
    clientSecret: keys.clientSecret,
    callbackURL: "http://localhost:5000/callback"
  },
  async (accessToken, refreshToken, extraParams, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });

    if (existingUser) {
      done(null, existingUser);
    } else {
      const user = await new User({ auth0Id: profile.id }).save();
      done(null, user);
    }
  }
);

passport.use(strategy);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});
