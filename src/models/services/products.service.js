import { CONFIG } from "../../config/config.js"
import { ProductRepository} from "../repositories/products.repository.js"

import {ProductsMemoryDao} from "../dao/memory/products.memory.dao.js"
import {ProductsMongoDao} from "../dao/mongo/products.mongo.dao.js"
let productsDao

export class ProductService {
    constructor() {
        switch (CONFIG.DATASOURCE) {
            case "MEMORY": {
               
                productsDao = new ProductsMemoryDao()
                break
            }
            case "MONGO": {
                
                productsDao = new ProductsMongoDao()
                break
            }
            default:
                throw new Error("Param not found")
        }
        
        return new ProductRepository(productsDao)
    }
} 

