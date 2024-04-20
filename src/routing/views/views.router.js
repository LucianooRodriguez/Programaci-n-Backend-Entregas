const { Router } = require('express')
const router = Router()

const ViewsController = require("../../controllers/views.controller")

const { isAuthorized } = require("../../middlewares/jwt.middleware")
const { applyPolicy } = require("../../middlewares/auth.middleware")

//Retorna todos los cart
router.get("/home", ViewsController.home)
router.get("/login", ViewsController.login)
router.get("/products", ViewsController.products )

module.exports = router;