import { Router } from "express"

import {router as cartsRouter }from "./carts/carts.router.js"
import {router as productsRouter} from "./products/products.router.js"
import {router as usersRouter }from "./users/users.router.js"
import{ router as messagesRouter }from "./messages/messages.router.js"
import { router as authRouter }from "./auth/auth.router.js"
import {router as homeRouter} from "./home/home.router.js"
import {router as ticketsRouter} from "./tickets/tickets.router.js"
import {router as testRouter} from "../../test/test.router.js"
import {router as mailRouter} from "./mail/mail.router.js"
import {router as apidocsRouter} from "./apidocs/apidocs.router.js"
import {router as chatRouter} from "./chat/chat.router.js"
import {router as viewsRouter} from "./views/views.router.js"


export const router = Router()

router.use("/", viewsRouter)
router.use("/api/carts", cartsRouter)
router.use("/api/products", productsRouter)
router.use("/api/users", usersRouter)
router.use("/api/messages", messagesRouter)
router.use("/api/auth", authRouter)
router.use("/api/home", homeRouter)
router.use("/api/tickets", ticketsRouter)
router.use("/api/mail", mailRouter)
router.use("/api/test", testRouter)
router.use("/api/apidocs", apidocsRouter)
router.use("/api/chat", chatRouter)
