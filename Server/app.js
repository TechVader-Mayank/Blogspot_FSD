const express = require("express");
const app = express();
const cors = require("cors");
const blogRoutes = require("./routes/blogRoutes");
const userRotes = require('./routes/userRoutes');

const multer = require("multer");

//MIDDLEWARE
//MIDDLEWARE FOR REQ.BODY
app.use(express.json());
app.use(cors());

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./assets");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });

//IMAGE UPLOAD API
app.post("/uploads", upload.single("image"), (req, res) => {
  res.send("File Upload success");
});
//STATIC FILE SERVING MIDDLEWARE
app.use("/assets", express.static(__dirname + "/assets"));
//routes
app.use("/api/v1/blogs/", blogRoutes);
app.use("/api/v2/users/",userRotes);
module.exports = app;
