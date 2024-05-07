import {userModel} from'../../schema/users.schema.js'
import {MongoManager} from "../../db/manager/mongo.manager.js"

export class UsersMongoDao {
    constructor() {
        MongoManager.start()
    }

    getAll = async () => {
        return await userModel.find().lean()
    }

    getById = async (id) => {
        return await userModel.findOne({ _id: id }).lean()
    }

    getByEmail = async (email) => {
        return await userModel.findOne({ email: email }).lean()
    }

    save = async (payload) => {
        const newUser = await userModel.create(payload)
        return newUser
    }

    getCart = async (userId) => {
        let user = await userModel.findOne({ _id: userId }).lean()
        return user.carts
    }

    updateById = async (userId, user) => {
        return await userModel.updateOne({ _id: userId }, user)
    }
}

