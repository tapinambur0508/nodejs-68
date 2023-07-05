const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    // title: String,
    // author: String,
    // year: Number,
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
      default: 2023,
    },
    genre: {
      type: String,
      required: true,
      enum: [
        "Action",
        "Biography",
        "History",
        "Horror",
        "Kids",
        "Learning",
        "Sci-Fi",
      ],
      default: "Action",
    },
    publisherURL: {
      type: String,
      required: true,
      match:
        /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", bookSchema);
