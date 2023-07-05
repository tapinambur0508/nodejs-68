function checkAuth(req, res, next) {
  const { apiKey } = req.query;

  if (typeof apiKey === "undefined") {
    return res.status(401).send("Unauthorized");
  }

  if (apiKey !== "123456") {
    return res.status(401).send("Unauthorized");
  }

  next();
}

module.exports = checkAuth;
