import { Router } from 'express'

import {MessageController}  from"../../controllers/messages.controller.js"
import { authorization } from"../../utils/passport.js"
import { isAuthorized } from"../../middlewares/jwt.middleware.js"

export const router = Router()

//Retorna todos los mensajes
router.get("/", isAuthorized,  MessageController.getAllMessages )

//Crea un nuevo mensaje
router.post("/", isAuthorized,  authorization("user"), MessageController.getAllMessages )

