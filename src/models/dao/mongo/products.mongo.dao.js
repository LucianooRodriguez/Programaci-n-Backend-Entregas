import {productModel} from'../../schema/products.schema.js'
import {MongoManager} from "../../db/manager/mongo.manager.js"

export class ProductsMongoDao {
    constructor() {
        MongoManager.start()
    }

    getAll = async (category = "", limit = "", page = "", price = "", sort = "") => {
        if (category != "") {
            return await productModel.paginate({ category: category }, { limit: parseInt(limit), page: parseInt(page), sort: { price: parseInt(sort) } })
        } else {
            return await productModel.paginate({}, { limit: parseInt(limit), page: parseInt(page), sort: { price: parseInt(sort) } })
        }
    }

    getById = async (id) => {
        return await productModel.findOne({ _id: id }).lean()
    }

    save = async (payload) => {
        const newProduct = await productModel.create(payload)

        newProduct = await productModel.findOne({}).sort({ _id: -1 })
        return newProduct
    }

    updateById = async (productId, product) => {
        return await productModel.updateOne({ _id: productId }, product)
    }

    deleteById = async (productId) => {
        return await productModel.deleteOne({ _id: productId })
    }
}

