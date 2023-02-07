const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    // fname: String,
    title: String,
    description: String,
    filename:String,
  },
  {
    collection: "VideoInfo",
  }
);

mongoose.model("VideoInfo", UserDetailsScehma);
