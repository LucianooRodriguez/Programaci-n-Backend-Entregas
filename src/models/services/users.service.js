import { CONFIG } from "../../config/config.js"
import { UserRepository } from"../repositories/users.repository.js"

import {UsersMemoryDao} from "../dao/memory/users.memory.dao.js"
import {UsersMongoDao} from "../dao/mongo/users.mongo.dao.js"
let usersDao

export class UserService {
    constructor() {
        switch (CONFIG.DATASOURCE) {
            case "MEMORY": {
                
                usersDao = new UsersMemoryDao()
                break
            }
            case "MONGO": {
                
                usersDao = new UsersMongoDao()
                break
            }
            default:
                throw new Error("Param not found")
        }
        
        return new UserRepository(usersDao)
    }
} 
