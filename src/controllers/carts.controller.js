const { errorResponse, successResponse } = require("../utils/utils")
const CartRepository = require("../models/repositories/carts.repository")
const cartRepository = new CartRepository()
class CartController {
    static getAllCarts = async (req, res, next) => {
        try {
            const carts = await cartRepository.getAllCarts()
            const response = successResponse(carts)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }
    static getCartById = async (req, res, next) => {
        try {
            const cart = await cartRepository.getCartById(req.params.cid)
            const response = successResponse(cart)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }
    static saveCart = async (req, res, next) => {
        const payload = req.body
        const { name, products } = payload
        try {
            if (!name || !products) {
                throw new Error("Bad request")
            }
            const newCart = await cartRepository.saveCart(payload)
            const response = successResponse(newCart)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }
    static newCartToUser = async (req, res, next) => {
        try {
            const payload = req
            payload.name = req.params.uid
            payload.products = []
            const newCart = await cartRepository.saveCart(payload)
            res.redirect("/api/users/addCart/" + req.params.uid + "/" + newCart._id.toString())
        } catch (err) {
            next(err)
        }
    }
    static addProduct = async (req, res, next) => {
        try {
            if (!req.query.quantity) {
                req.query.quantity = "1"
            }
            let data = await cartRepository.addProduct(req.params.cid, req.params.pid, req.query.quantity)
            const response = successResponse(data)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    static confirmPurchase = async (req, res, next) => {
        try {
            let cart = await cartRepository.confirmPurchase(req.params.cid)
            const response = successResponse(cart)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }
}
module.exports = CartController