const mongoose = require('mongoose');
const Url = "mongodb+srv://ahmad:Ahmad(99)@cluster0.nbgxhvq.mongodb.net/";
mongoose.connect(Url, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
   console.log('Connected')
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection failed"));
module.exports = mongoose;