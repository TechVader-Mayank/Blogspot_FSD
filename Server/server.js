//CONFIG
require("dotenv").config();
const app = require("./app");
const { connectMongo } = require("./dbconnection");

/**
 * SERVER LISTEN
 */

//CONNECT TO DB
connectMongo(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB Successfully");
    //Listen for Requests
    app.listen(process.env.PORT, () => {
      console.log("Listening on Port 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
