const Poster = require("../models/post");
const createPostData = async (req, res) => {
   try {
      const { title, desc, image_link } = req.body;
      const post = new Poster({
         title,
         desc,
         image_link,
      })
      await post.save();
      res.json(post);
   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}
const getAllPostData = async (req, res) => {
   try {
      const getPosts = await Poster.find({})
      res.json(getPosts)
   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}

const getPostById = async (req, res) => {
   try {
      let dataAgainstId = await Poster.findById(req.params.id)
      if (!dataAgainstId) {
         return res.status(404).json({ message: 'Not Found' })
      }
      res.json(dataAgainstId)

   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}
//* method Api to delete post by using id
const deletePostById = async (req, res) => {
   try {
      let dataAgainstId = await Poster.findByIdAndDeleteById(req.params.id)
      if (!dataAgainstId) {
         return res.status(404).json({ message: 'Not Found' })
      }
      response.json({ message: "Delete Success" })

   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}
//* Method for updating post by using id.
const updatePostById = async (req, res) => {
   try {
      const { title, desc, image_link } = request.body
      let dataAgainstId = await Poster.findByIdAndUpdateById(req.params.id, {
         title,
         desc,
         image_link
      },
         { new: true }
      )
      if (!dataAgainstId) {
         return res.status(404).json({ message: 'Not Found' })
      }
      res.json(dataAgainstId)

   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}

//* exporting modules to use in other files.
module.exports = {
   createPostData, getAllPostData, getPostById, deletePostById,
   updatePostById
}