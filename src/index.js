import express from "express"
import path from "path"
import handlebars from 'express-handlebars'
import session from "express-session"
import passport from "passport"
import MongoStore from "connect-mongo"
import cookieParser from 'cookie-parser'
import { dirname } from "path"
import {CONFIG} from "./config/config.js"
import { initializePassport } from "./config/passport/passport.js"
import { addLogger } from "./middlewares/logger.middleware.js"
import { errMiddleware } from "./middlewares/errors.middleware.js"


import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUIExpress from "swagger-ui-express"

import cluster from 'cluster'
import { cpus } from "os"
import { router as appRouter } from "./routing/app.router.js"

if (cluster.isPrimary) {
    for (let i = 1; i <= cpus().length; i++) {
        cluster.fork()
    }
} else {
    
    const app = express()
    
    app.use(express.json())
    app.use(express.urlencoded({ express: true }))

    app.use(session({
        store: MongoStore.create({
            mongoUrl: CONFIG.mongo.URI
        }),
        secret: "secretCoder",
        resave: true,
        saveUninitialized: true
    }))

    //public
    app.use(express.static(path.resolve(dirname, "../src/public")))

    //Passport
    initializePassport()
    app.use(passport.initialize())
    app.use(passport.session())

    app.use(cookieParser('coderSecret'))

    //Views
    app.engine('handlebars', handlebars.engine())
    app.set('views', path.resolve(__dirname, "../src/views"))
    app.set('view engine', 'handlebars')

    app.use(addLogger)
    app.use('/', errMiddleware, appRouter)


    //DOCUMENTACION
    const swaggerOptions = {
        definition: {
            openapi: '3.0.1',
            info: {
                title: 'My proyecto back',
                description: "Proyecto backend"
                ,
                contact: {
                    name: "soporte",
                    url: 'https://www.example.com.ar',
                    email: 'lucianoorodriguez1@gmail.com'
                }
            }
        },
        apis: [`${dirname}/docs/**/*.yaml`]
    }

    const specs = swaggerJSDoc(swaggerOptions)

    app.use('/apidocs', swaggerUIExpress.serve, swaggerUIExpress.setup(specs))

    app.listen(CONFIG.PORT, () => {
        console.log("Server UP  on port: ", CONFIG.PORT)
    })

}