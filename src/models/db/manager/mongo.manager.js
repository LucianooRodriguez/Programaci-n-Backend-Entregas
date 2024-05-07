import {mongoose} from "mongoose"

import {CONFIG} from "../../../config/config.js"

export class MongoManager {

    static #instance

    constructor(){
        mongoose.connect(CONFIG.mongo.URI).then(
            () => {
                console.log("DB connected")
        }).catch((err) => {
            console.log("Error connecting DB")
            throw err
        })
    }

    static start(){
        if(!this.#instance){
            this.#instance = new MongoManager()
        }
        return this.#instance
    }
}