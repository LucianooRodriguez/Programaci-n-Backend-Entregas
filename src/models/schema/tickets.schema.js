import {mongoose} from 'mongoose'
import "./tickets.schema.js"

const ticketsCollection = "Tickets"

const ticketSchema = new mongoose.Schema({
    code: {
        type: String,
        index: true
    },
    purchase_datetime: {
        type: Date
    },
    amount: {
        type: Number
    },
    purchaser: {
        type: String
    }
})
export const ticketModel = mongoose.model(ticketsCollection, ticketSchema)
