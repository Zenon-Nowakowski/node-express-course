const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

app.use(express.json())
const port = 3000 

//routes
app.get('/hello', (req,res) => {
    res.send("Task Manager")
})

app.use('/api/v1/tasks',tasks)

app.listen(port, console.log('Server is listening on 3000...'))