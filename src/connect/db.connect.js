const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect(
    "mongodb+srv://egss:egss@cluster0.oqe184v.mongodb.net/printertalesdb?retryWrites=true&w=majority"
  );
};
module.exports = connect;
