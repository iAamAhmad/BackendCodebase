const Todo = require("../models/user");
const createdata = async (req, res) => {
   try {
      const { name, email, password } = req.body;
      const todo = new Todo({
         name,
         email,
         password,
      })
      await todo.save();
      res.json(todo);
   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}
const getAllData = async (req, res) => {
   try {
      const getTodos = await Todo.find({})
      res.json(getTodos)
   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}

const getById = async (req, res) => {
   try {
      let dataAgainstId = await Todo.findById(req.params.id)
      if (!dataAgainstId) {
         return res.status(404).json({ message: 'Not Found' })
      }
      res.json(dataAgainstId)

   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}
const deleteById = async (req, res) => {
   try {
      let dataAgainstId = await Todo.findByIdAndDeleteById(req.params.id)
      if (!dataAgainstId) {
         return res.status(404).json({ message: 'Not Found' })
      }
      response.json({ message: "Delete Success" })

   } catch (err) {
      res.status(500).json({ error: err.message })
   }
}

const updateById = async (req, res) => {
   try {
      const { name, email, password } = request.body
      let dataAgainstId = await Todo.findByIdAndUpdateById(req.params.id, {
         name,
         email,
         password
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


module.exports = {
   createdata, getAllData, getById, deleteById,
   updateById
}