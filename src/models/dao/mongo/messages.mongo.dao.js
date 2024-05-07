import {messageModel} from'../../schema/messages.schema.js'
import {MongoManager} from "../../db/manager/mongo.manager.js"

export class MessagesMongoDao {
    constructor() {
        MongoManager.start()
    }

    getAll = async () => {
        return await messageModel.find().lean()
    }

    save = async (payload) => {
        const newMessage = await messageModel.create(payload)
        return newMessage
    }
}

