import passport from "passport";
import { User } from "../model/users.mjs";
import { Strategy } from "passport-local";
import { comparePassword } from "../helper/helpers.mjs";

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await User.findById(id);
    done(null, findUser);
  } catch (err) {
    done(err, null);
  }
});

export default passport.use(
  new Strategy(async (username, password, done) => {
    try {
      const findUser = await User.findOne({ username });
      if (!findUser) throw new Error("User not found");
      if (!comparePassword(password, findUser.password))
        throw new Error("Bad credential");
      done(null, findUser);
    } catch (err) {
      done(err, null);
    }
  })
);
