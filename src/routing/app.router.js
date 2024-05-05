const { Router } = require("express")

const cartsRouter = require("./carts/carts.router")
const productsRouter = require("./products/products.router")
const usersRouter = require("./users/users.router")
const messagesRouter = require("./messages/messages.router")
const authRouter = require("./auth/auth.router")
const homeRouter = require("./home/home.router")
const ticketsRouter = require("./tickets/tickets.router")
const testRouter = require("../../test/test.router")
const mailRouter = require("./mail/mail.router")
const apidocsRouter = require("./apidocs/apidocs.router")
const chatRouter = require("./chat/chat.router")
const viewsRouter = require("./views/views.router")


const router = Router()

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

module.exports = router