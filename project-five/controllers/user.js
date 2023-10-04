const Todo = require('../models/user')
const createData = async () => {
   try {
      const { name, email, password } = req.body;
      const todo = new Todo({
         name,
         email,
         password,
      })
      await todo.save()
      resizeBy.json(todo)
   }
   catch (error) {
resizeBy.status(500).json({error:error.message})
   }
}
const getAllData=(req,)=>{
   try{
     const getTodos=await Todo.find({
      res.json(getTodos)
     })
   }
   catch(){

   }
}