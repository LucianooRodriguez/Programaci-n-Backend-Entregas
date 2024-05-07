import {mongoose }from 'mongoose'
import "./carts.schema.js"
import mongoosePaginate from "mongoose-paginate-v2"

export const usersCollection = "Users"

export const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        index: true
    },
    password: {
        type: String
    },
    age: {
        type: Number
    },
    rol: {
        type: String,
        enum: ["user","admin"]
    },
    carts: {
        type: [
            {
                cart: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Carts"
                }
            }
        ],
        default: []
    }
})

userSchema.pre("find",function() {
    this.populate("carts.cart")
})

userSchema.plugin(mongoosePaginate)
export const userModel = mongoose.model(usersCollection, userSchema)

