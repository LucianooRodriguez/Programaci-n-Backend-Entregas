const { Router } = require('express')
const router = Router()

const { 
    getProductsController,
    getProductByIdController,
    createProductController } = require('../controllers/products.controller')


//Retorna todos los productos
router.get('/products', getProductsController)


//Retorna un producto
router.get('/products/:pid', getProductByIdController)

//Agrega un producto
router.post('/products', createProductController)

//Modifica un producto
router.put('/products/:pid', (req, res) => {
    let properties = Object.keys(req.body)
    let newValues = Object.values(req.body)

    let i = 0

    while (i < properties.length) {
        //prManager.updateProductById(req.params.pid, properties[i], newValues[i])
        i++
    }
})

//Elimina un producto
router.delete('/api/products/:pid', (req, res) => {
    //prManager.deleteProductById(req.params.pid)
    productModel.delete({ id: parseInt(req.params.pid) })
})

//WEBSOCKETS

router.get('/realTimeProducts', (req, res) => {
    res.render('realTimeProducts', {
        style: "style.css"
    })
})

module.exports = router;

