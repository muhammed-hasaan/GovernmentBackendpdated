const mongoose = require("mongoose");

const ImageDetailsSchema = new mongoose.Schema(
  {
    image:String,
    name: String,
    select: String,
    password: String,
    fileid: String,
    date: String,
    code: String,
    location: String,
    QrGet: String,
    Qrcode: String,
    image2:String,
    image3:String
  },
  {
    collection: "ImageDetails",
  }
);

mongoose.model("ImageDetails", ImageDetailsSchema);
