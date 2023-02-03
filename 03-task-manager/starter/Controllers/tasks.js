const Task = require('../modules/tasks')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
}

const createTask = async (req, res) => {
    try {
        const tasks = await Task.create(req.body)
        res.status(201).json({ tasks })
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
}

const getTask = async (req, res) => {
    try {
        const tasks = await Task.findOne(req.body)
        res.status(201).json({ tasks })
    }
    catch (error) {
        res.status(500).json({msg: error})
    }
}

const updateTask = async (req, res) => {
    res.send('update task')
}

const deleteTask = async (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}