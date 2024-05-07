import {SaveTicketDTO }from "../dto/tickets.dto.js"

export class TicketRepository {
    constructor(ticketsDao) {
        this.dao = ticketsDao
    }

    getAll = async () => {
        return await this.dao.getAll()
    }

    save= async (payload) => {
        const ticketPayload = new SaveTicketDTO(payload)
        return await this.dao.save(ticketPayload)
    }
}

