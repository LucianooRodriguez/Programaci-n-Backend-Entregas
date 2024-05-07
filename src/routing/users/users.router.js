import { Router } from 'express'
export const router = Router()

import {UserController} from"../../controllers/users.controller.js"


import { applyPolicy } from "../../middlewares/auth.middleware.js"

//Retorna todos los cart
router.get('/', applyPolicy(["admin"]), UserController.getAll)
router.post('/', applyPolicy(["admin"]), UserController.save)

router.get("/:uid", UserController.getById)

router.get("/cart/:uid", UserController.getCart)

