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


const router = Router()

router.use("/carts", cartsRouter)
router.use("/products", productsRouter)
router.use("/users", usersRouter)
router.use("/messages", messagesRouter)
router.use("/auth", authRouter)
router.use("/home", homeRouter)
router.use("/tickets", ticketsRouter)
router.use("/mail", mailRouter )
router.use("/test",testRouter)
router.use("/apidocs",apidocsRouter )

module.exports = router