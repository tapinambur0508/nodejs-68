const path = require("node:path");
const crypto = require("node:crypto");

const multer = require("multer");
const express = require("express");

const UserController = require("../controllers/user");

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (__, ___, cb) {
    cb(null, path.join(__dirname, "..", "uploads"));
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = crypto.randomUUID(); // 560fc0fd-8092-41ad-ab08-bb6094071f09
    // file.originalname: TrevorPhilips-GTAV.png
    const ext = path.extname(file.originalname); // .png
    const baseName = path.basename(file.originalname, ext); // TrevorPhilips-GTAV

    cb(null, `${baseName}-${uniqueSuffix}${ext}`); // TrevorPhilips-GTAV-560fc0fd-8092-41ad-ab08-bb6094071f09.png
  },
});

const upload = multer({ storage, limits: { fileSize: 1000000 } }); // 1 MB

router.get("/:id", UserController.getById);

router.post("/:id/avatar", upload.single("image"), UserController.uploadAvatar);

module.exports = router;
