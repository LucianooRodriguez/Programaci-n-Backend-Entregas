
import {ProductService} from"../models/services/products.service.js"

const productService = new ProductService()


export class ViewsController {

    static products = async (req, res ) => {
        let products = await productService.getAll()
        let data
        data = { products: products }
        
        res.render("products", data )
    }

    static login = (req, res, next) => {
        res.render("login" , {});
    }

    static register = (req, res, next) => {

    }

    static getCartById = (req, res, next) => {

    }

    static home = async (req, res) => {
        res.render("home" , {});
    }

    static profile = (req, res, next) => {

    }

    static resetPass = (req, res, next) => {

    }

    static forgotPass = (req, res, next) => {

    }
}

