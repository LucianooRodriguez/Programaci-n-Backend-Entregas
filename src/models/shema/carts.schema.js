import mongoose from 'mongoose'
import './products.shema.js'

const cartsCollection = "Carts"

const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    products: {
        type: [
            {
                product: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Products"
                },
                quantity: Number
            }
        ],
        default: []
    }
})

cartSchema.pre("find",function() {
    this.populate("products.product")
})

export const cartModel = mongoose.model(cartsCollection, cartSchema)
