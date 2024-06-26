import { successResponse } from "../utils/utils.js"
import { CartService } from "../models/services/carts.service.js"
import { ProductService } from "../models/services/products.service.js"
import { TicketService } from '../models/services/tickets.service.js'

const cartService = new CartService()
const productService = new ProductService()
const ticketService = new TicketService()

export class CartController {
    static getAll = async (req, res, next) => {
        try {
            const carts = await cartService.getAll()
            const response = successResponse(carts)
            res.status(200).json(response)
        } catch (err) {
            req.logger.error(err)
            next(err)
        }
    }

    static getById = async (req, res, next) => {
        try {
            const cart = await cartService.getById(req.params.cid)
            const response = successResponse(cart)
            res.status(200).json(response)
        } catch (err) {
            req.logger.error(err)
            next(err)
        }
    }

    static save = async (req, res, next) => {
        const payload = req.body
        const { name, products } = payload
        try {
            if (!name || !products) {
                throw new Error("Bad request")
            }

            const newCart = await cartService.save(payload)

            const response = successResponse(newCart)
            res.status(200).json(response)
        } catch (err) {
            req.logger.error(err)
            next(err)
        }
    }

    static addProduct = async (req, res, next) => {
        try {

            if(req.session.rol == "premium"){
                let product = await productService.getById(req.params.pid)

                if(product.owner == req.session.user.email) {
                    res.send("No puedes agregar tu propio producto al carrito")
                }
            }
            if (!req.query.quantity) {
                req.query.quantity = "1"
            }
            let cart = await cartService.getById(req.params.cid)

            let check = cart.products.filter((prod) => prod.product.toString() == req.params.pid)

            if (check.length > 0) {
                let index = cart.products.indexOf(check[0])
                cart.products[index] = { product: req.params.pid, quantity: parseInt(req.query.quantity) }
            } else {
                cart.products.push({ product: req.params.pid, quantity: parseInt(req.query.quantity) })
            }

            let data = await cartService.updateById(req.params.cid, cart)
            const response = successResponse(data)
            res.status(200).json(response)
        } catch (err) {
            req.logger.error(err)
            next(err)
        }
    }

    static deleteProduct = async (req, res, next) => {
        try {
            let cart = await cartService.getById(req.params.cid)

            let new_arr = cart.products.filter((prod) => prod.product.toString() != req.params.pid)

            cart.products = new_arr

            let data = await cartService.updateById(req.params.cid, cart)
            const response = successResponse(data)
            res.status(200).json(response)
        } catch (err) {
            req.logger.error(err)
            next(err)
        }
    }

    static confirmPurchase = async (req, res, next) => {
        try {
            let cart = await cartService.getById(req.params.cid)
            let aux_c = cart
            let amount = 0

            await cart.products.map(async (item) => {
                let product = await productService.getById(item.product.toString())

                if (product.stock > item.quantity) {
                    console.log("se vendieron " + item.quantity + " unidades de " + product.title + ".")

                    let aux_p = product
                    aux_p.stock = product.stock - item.quantity

                    await productService.updateById(item.product.toString(), aux_p)
        
                    amount = amount + product.price
                    console.log("new amount " + amount)
                    let new_arr = aux_c.products.filter((prod) => prod.product.toString() != item.product.toString())
                    aux_c.products = new_arr
                    await cartService.updateById(req.params.cid,aux_c)
                }
            })

            if (amount > 0) {
                let new_ticket = {
                    amount: amount,
                    purchaser: req.session.user.email
                }

                let data = await ticketService.save(new_ticket)
                const response = successResponse(data)
                res.status(200).json(response)
            } else {
                const response = successResponse(cart)
                res.status(200).json(response)
            }

        } catch (err) {
            req.logger.error(err)
            next(err)
        }
    }
}

