const { getDAOS } = require("../factories/carts.daos.factory")
const SaveCartDTO = require("../dto/carts.dto")
const cartsDao = getDAOS()

class CartRepository {
    constructor() {
        this.dao = cartsDao
    }

    getAllCarts = async () => {
        return await this.dao.getAll()
    }

    saveCart = async (payload) => {
        const cartPayload = new SaveCartDTO(payload)
        return await this.dao.save(cartPayload)
    }

    getCartById = async (id) => {
        return await this.dao.getCartById(id)
    } 

    addProduct = async (cartId, productId, quantity) => {
        return await this.dao.addProduct(cartId, productId, quantity)
    }

    confirmPurchase = async (cartId) => {
        return await this.dao.confirmPurchase(cartId)
    }
}

module.exports = CartRepository