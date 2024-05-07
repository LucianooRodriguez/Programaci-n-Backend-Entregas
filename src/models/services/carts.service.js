import { CONFIG } from "../../config/config.js"
import { CartRepository} from"../repositories/carts.repository.js"

let cartsDao
import {CartsMongoDao} from "../dao/mongo/carts.mongo.dao.js"
import {CartsMemoryDao} from "../dao/memory/carts.memory.dao.js"
console.log (CONFIG)
export class CartService {

    constructor() {
        switch (CONFIG.DATASOURCE) {
            case "MEMORY": {
                
                cartsDao = new CartsMemoryDao()
                break
            }
            case "MONGO": {
                
                cartsDao = new CartsMongoDao()
                break
            }
            default:
                throw new Error("Param not found")
        }
        
        return new CartRepository(cartsDao)
    }
} 