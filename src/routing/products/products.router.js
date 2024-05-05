const { Router } = require('express')
const router = Router()
const { authorization } = require("../../utils/passport")
const { isAuthorized } = require("../../middlewares/jwt.middleware")
const compression = require("express-compression")

const ProductController = require("../../controllers/products.controller")

//Retorna todos los productos
router.get('/', compression({ brotli: { enabled: true, zlib: {} } }), ProductController.getAll)

//Retorna un producto
router.get('/:pid', ProductController.getById)

//Agrega un producto
router.post('/', isAuthorized, authorization("admin"), ProductController.save)

//Actualiza un producto
router.put('/:pid', isAuthorized, authorization("admin"), ProductController.updateById)

//Elimina un producto
router.delete('/:pid', isAuthorized, authorization("admin"), ProductController.deleteById)

module.exports = router;