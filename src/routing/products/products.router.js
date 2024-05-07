import { Router } from 'express'
export const router = Router()
import { authorization } from "../../utils/passport.js"
import { isAuthorized } from "../../middlewares/jwt.middleware.js"
import compression from "express-compression"

import {ProductController} from "../../controllers/products.controller.js"

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

