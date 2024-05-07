import { Router } from 'express'
export const router = Router()

import {ViewsController} from "../../controllers/views.controller.js"

//Retorna todos los cart
router.get("/home", ViewsController.home)
router.get("/login", ViewsController.login)
router.get("/products", ViewsController.products )

