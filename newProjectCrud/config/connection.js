const mongoose = require("mongoose");
const url = "mongodb+srv://MAhmad:Khan(99)@cluster0.2sq2nnk.mongodb.net/"
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected");
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed"));

module.exports = mongoose;