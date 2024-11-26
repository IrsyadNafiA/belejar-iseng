import { request } from "express";
import passport from "passport";

const authenticateUser = (request, response, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return response
        .status(err.status || 500)
        .json({ message: err.message || "Internal Server Error" });
    }
    if (!user) {
      return response
        .status(401)
        .json({ message: info ? info.message : "Unauthorized" });
    }
    request.logIn(user, (err) => {
      if (err) {
        return response
          .status(err.status || 500)
          .json({ message: err.message || "Internal Server Error" });
      }
      next();
    });
  })(request, response, next);
};

const isAuthenticated = (request, response, next) => {
  if (request.isAuthenticated()) {
    next();
  } else {
    response.sendStatus(401);
  }
};

export { isAuthenticated, authenticateUser };
