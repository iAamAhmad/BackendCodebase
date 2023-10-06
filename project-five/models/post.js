const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   desc: {
      type: String,
      required: true
   },
   img_link: {
      type: String,
      required: true
   },

})
const Poster = mongoose.model("Post", postSchema);

module.exports = Poster;
// file