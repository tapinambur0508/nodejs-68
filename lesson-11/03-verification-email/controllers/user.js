const User = require("../models/user");

async function getById(req, res, next) {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select({
      name: 1,
      email: 1,
      avatar: 1,
    });

    if (user === null) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

async function uploadAvatar(req, res, next) {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { avatar: req.file.filename },
      { new: true }
    ).select({ name: 1, email: 1, avatar: 1 });

    if (user === null) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

async function verify(req, res, next) {
  const { token } = req.params;

  try {
    const user = await User.findOne({ verifyToken: token });

    if (user === null) {
      return res.status(401).json({ message: "Invalid token" });
    }

    await User.findByIdAndUpdate(user._id, {
      verified: true,
      verifyToken: null,
    });

    return res.json({ message: "User verified" });
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  getById,
  uploadAvatar,
  verify,
};
