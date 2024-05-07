import { CONFIG } from "../../config/config.js"
import { TicketRepository} from "../repositories/tickets.repository.js"

import {TicketsMemoryDao } from "../dao/memory/tickets.memory.dao.js"
import {TicketsMongoDao} from"../dao/mongo/tickets.mongo.dao.js"
let ticketsDao

export class TicketService {
    constructor() {
        switch (CONFIG.DATASOURCE) {
            case "MEMORY": {
                
                ticketsDao = new TicketsMemoryDao()
                break
            }
            case "MONGO": {
                
                ticketsDao = new TicketsMongoDao()
                break
            }
            default:
                throw new Error("Param not found")
        }
        
        return new TicketRepository(ticketsDao)
    }
} 

