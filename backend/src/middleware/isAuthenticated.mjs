const isAuthenticated = (request, response, next) => {
  if (request.isAuthenticated()) {
    next();
  } else {
    response.sendStatus(401);
  }
};

export { isAuthenticated };
