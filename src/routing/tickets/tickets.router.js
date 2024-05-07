import { Router } from 'express'
export const router = Router()

import{ TicketController }from "../../controllers/tickets.controller.js"

import { isAuthorized } from "../../middlewares/jwt.middleware.js"


//Retorna todos los cart
router.get('/', isAuthorized, TicketController.getAll)
router.post('/', isAuthorized, TicketController.save)
