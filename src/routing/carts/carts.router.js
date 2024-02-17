const { Router } = require('express')
const router = Router()
const CartController = require("../../controllers/carts.controller")
const { isAuthorized } = require("../../middlewares/jwt.middleware")

router.post("/purchase/:cid", CartController.confirmPurchase)


module.exports = router;