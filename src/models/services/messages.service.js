import { CONFIG } from "../../config/config.js"
import { MessageRepository} from"../repositories/messages.repository.js"

import {MessagesMongoDao} from "../dao/mongo/messages.mongo.dao.js"
import {MessagesMemoryDao} from "../dao/memory/messages.memory.dao.js"
let messagesDao

export class MessageService {
    constructor() {
        switch (CONFIG.DATASOURCE) {
            case "MEMORY": {
                
                messagesDao = new MessagesMemoryDao()
                break
            }
            case "MONGO": {
                
                messagesDao = new MessagesMongoDao()
                break
            }
            default:
                throw new Error("Param not found")
        }
        
        return new MessageRepository(messagesDao)
    }
} 

