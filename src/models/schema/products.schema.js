import {mongoose }from 'mongoose'
import mongoosePaginate from "mongoose-paginate-v2"

export const productsCollection = "Products"

export const productSchema = new mongoose.Schema({
    title: {
        type: String,
        index: true
    },
    description: { type: String },
    price: { type: Number },
    thumbnail: { type: Array },
    code: {
        type: String,
        index: true
    },
    stock: { type: Number },
    status: { type: Boolean },
    category: { type: String },
    owner: { type: String }
})

productSchema.plugin(mongoosePaginate)
export const productModel = mongoose.model(productsCollection, productSchema)

