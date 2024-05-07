import { successResponse } from "../utils/utils.js"
import {TicketService} from "../models/services/tickets.service.js"

const ticketService = new TicketService()

export class TicketController {
    static getAll = async (req, res, next) => {
        try {
            const tickets = await ticketService.getAll()
            const response = successResponse(tickets)
            res.status(200).json(response)
        } catch (err) {
            req.logger.error(err)
            next(err)
        }
    }

    static save = async (req, res, next) => {
        try {
            const payload = req.body
            const newTicket = await ticketService.save(payload)
            const response = successResponse(newTicket)
            res.status(200).json(response)
        } catch (err) {
            req.logger.error(err)
            next(err)
        }
    }
}
