import mongoose from "mongoose"

const DB_NAME = "ecommerce"
/*const URL = "mongodb+srv://lucianoorodriguez1:PKZdDQFYLyzJ7G33@ecommercecluster.eonxrvw.mongodb.net/" + DB_NAME*/

module.exports={
    connect : () => {
        return mongoose.connect("mongodb+srv://lucianoorodriguez1:PKZdDQFYLyzJ7G33@ecommercecluster.eonxrvw.mongodb.net/ecommerce;", {}).then((connection)=>{
            console.log("App connected to Database Successfully")
        }).catch((err)=>{
            console.log(err)
        })
    }
}  