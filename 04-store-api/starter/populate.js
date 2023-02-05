const Produc = require('./models/product')
const jsonProducts = require('./products.json')

const connectDB = require('./db/connect')
const product = require('./models/product')

const start = async () => {
    try {
        await connectDB("")
        await product.deleteMany()
        await product.create(jsonProducts)
        console.log('success!')
        process.exit(0)
    }
    catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()