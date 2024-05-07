import { Router } from 'express'
export const router = Router()

import { CartController} from "../../controllers/carts.controller.js"


router.get('/', CartController.getAll)

router.post('/', CartController.save)

router.get("/:cid", CartController.getById)

router.post("/:cid/product/:pid", CartController.addProduct)

router.post("/purchase/:cid", CartController.confirmPurchase)

