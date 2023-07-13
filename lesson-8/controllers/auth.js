const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user");

const JWT_SECRET = process.env.JWT_SECRET;

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
      return res
        .status(401)
        .json({ message: "Email or password is incorrect" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch === false) {
      return res
        .status(401)
        .json({ message: "Email or password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" });

    await User.updateOne({ _id: user._id }, { $set: { token } });

    return res.status(200).json({ token });
  } catch (error) {
    return next(error);
  }
}

async function logout(req, res, next) {
  try {
    await User.updateOne({ _id: req.user.id }, { $set: { token: null } });

    return res.status(200).json({ message: "You are logged out" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  registered,
  login,
  logout,
};
