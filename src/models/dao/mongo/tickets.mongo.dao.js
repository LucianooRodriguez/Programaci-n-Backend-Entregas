import {ticketModel} from"../../schema/tickets.schema.js"
import {MongoManager} from "../../db/manager/mongo.manager.js"

export class TicketsMongoDao {
    constructor() {
        MongoManager.start()
    }

    getAll = async () => {
        return await ticketModel.find().lean()
    }

    save = async (payload) => {
        const newTicket = await ticketModel.create(payload)
        return newTicket
    }
}

