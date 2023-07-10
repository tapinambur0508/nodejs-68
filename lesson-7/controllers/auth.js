const bcrypt = require("bcrypt");

const User = require("../models/user");

async function registered(req, res, next) {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user !== null) {
      return res.status(409).json({ message: "User already exists" });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: passwordHash });

    return res.status(201).json({ message: "You are now registered" });
  } catch (error) {
    return next(error);
  }
}

async function login(req, res, next) {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user === null) {
      console.log("EMAIL NOT FOUND");
      return res
        .status(401)
        .json({ message: "Email or password is incorrect" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch === false) {
      console.log("PASSWORD NOT MATCH");
      return res
        .status(401)
        .json({ message: "Email or password is incorrect" });
    }

    return res.status(200).json({ token: "TOKEN" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  registered,
  login,
};
