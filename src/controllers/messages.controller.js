import { successResponse } from "../utils/utils.js"
import {MessageService} from "../models/services/messages.service.js"

const messageService = new MessageService()

export class MessageController {
    static getAllMessages = async (req, res, next) => {
        try {
            const messages = await messageService.getAllMessages()
            const response = successResponse(messages)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }

    static saveMessage = async (req, res, next) => {
        const payload = req.body
        try {

            const newMessage = await messageService.saveMessage(payload)

            const response = successResponse(newMessage)
            res.status(200).json(response)
        } catch (err) {
            next(err)
        }
    }
}

