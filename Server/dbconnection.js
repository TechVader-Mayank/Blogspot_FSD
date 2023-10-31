const mongoose = require("mongoose");

/**
 * THIS FUNCTION ALLOWS CONNECTION WITH A MONGO DB
 * @param {String} mongoURI THE URI OF THE MONGO STRING
 */
const connectMongo = async (mongoURI) => {
  mongoose.connect(mongoURI,{ useNewUrlParser: true,useUnifiedTopology: true});
};

const disconnectMongo = async () => {
  await mongoose.disconnect();
  await mongoose.connection.close();
};

module.exports = {
  connectMongo,
  disconnectMongo,
};
