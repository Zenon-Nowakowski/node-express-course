require('dotenv').config()
require('express-async-errors')

const connectDB = require('./db/connect')

const express = require('express');
const app = express();
const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

app.use(express.json())

//routes 
app.get('/', (req,res) => {
    res.send('<h1>Store API</h1><a href = "/api/v1/products"> products route</a>')
})

app.use('/api/v1/products', productsRouter)

//product routes 


app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3000
const URL = ""


const start = async () => {
    try {
        await connectDB(URL)
        app.listen(port, console.log(`server is listening on ${port}...`));
    }
    catch (error){
        console.log(error)
    }
}

start() 