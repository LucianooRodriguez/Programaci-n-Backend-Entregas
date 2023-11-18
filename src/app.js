const express = require('express')
const app = express()
const PORT = 3000
const productsRouter = require('../routers/productrouter.js')
const cartRouter = require('../routers/cartsrouter.js')

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Routes
app.use(productsRouter)
app.use(cartRouter)

app.listen(PORT, (req,res) => {
    console.log("Server running on  port ",PORT)
})


