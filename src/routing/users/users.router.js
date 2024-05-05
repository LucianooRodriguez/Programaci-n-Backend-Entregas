const { Router } = require('express')
const router = Router()

const UserController = require("../../controllers/users.controller")

const { isAuthorized } = require("../../middlewares/jwt.middleware")
const { applyPolicy } = require("../../middlewares/auth.middleware")

//Retorna todos los cart
router.get('/', applyPolicy(["admin"]), UserController.getAll)
router.post('/', applyPolicy(["admin"]), UserController.save)

router.get("/:uid", UserController.getById)

router.get("/cart/:uid", UserController.getCart)

module.exports = router;