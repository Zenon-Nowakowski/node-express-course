const getAllTasks = (req, res) => {
    res.send('Get all Takss')
}

const createTask = (req, res) => {
    res.send('Create Task')
}

const getTask = (req, res) => {
    res.send('get a task')
}

const updateTask = (req, res) => {
    res.send('update task')
}

const deleteTask = (req, res) => {
    res.send('delete task')
}

module.exports = {
    getAllTasks,createTask,getTask,updateTask,deleteTask
}