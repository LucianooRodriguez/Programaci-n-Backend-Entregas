import {mongoose} from 'mongoose'

export const messagesCollection = "messages"

export const messageSchema = new mongoose.Schema({
    user: {
        type: String,
        index: true
    },
    message: { type: String },
    date: { tpye: Date }
})

export const messageModel = mongoose.model(messagesCollection, messageSchema)

