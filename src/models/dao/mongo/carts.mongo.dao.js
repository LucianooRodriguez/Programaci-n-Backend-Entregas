import {cartModel} from "../../schema/carts.schema.js"
import {MongoManager} from "../../db/manager/mongo.manager.js"

export class CartsMongoDao {
    constructor() {
        MongoManager.start()
    }

    getAll = async () => {
        return await cartModel.find().lean()
    }

    save = async (payload) => {
        const newCart = await cartModel.create(payload)
        return newCart
    }

    getById = async (id) => {
        return await cartModel.findOne({ _id: id }).lean()
    }

    updateById = async (cartId, newCart) => {
        return await cartModel.updateOne({ _id: cartId }, newCart)
    }

    deleteById = async (cartId) => {
        return await cartModel.deleteOne({ _id: cartId })
    }
}
