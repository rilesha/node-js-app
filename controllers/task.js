import { Task } from "../models/task.js"

export const newTask = async(req,res) =>{
  const {title,description} = req.body

  await Task.create({
    title,
    description,
    user: req.user,
  })

  res.status(201).json({
    success: true,
    message: "Task Added successfully",
  })
}

export const getMyTask = async(req,res) =>{
    const userid = req.user._id;
    const task = await Task.find({user: userid});
    res.status(201).json({
      success: true,
      task,
    })
  }

  export const updateTask = async(req,res) =>{

    const {id} = req.params;
    const task = await Task.findById(id);

    task.isCompleted = !task.isCompleted;//it is a checkbox so we are switching values
    await task.save();

    res.status(201).json({
      success: true,
      message: "Task updated sucessfully",
    })
  }

  export const deleteTask = async(req,res) =>{
     const {id} = req.params;
    const task = await Task.findById(id);

    if(!task) return res.status(404).json({
      success: false,
      message:"task doesn't exsists",
    })
    await task.deleteOne()


    res.status(201).json({
      success: true,
      message: "Task deleted sucessfully",
    })
  }