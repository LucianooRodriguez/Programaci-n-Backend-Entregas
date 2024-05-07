import { dirname } from 'path'
import { Router } from 'express'
import swaggerJSDoc from'swagger-jsdoc'
import swaggerUIExpress from"swagger-ui-express"

export const router = Router()

const swaggerOptions={
    definition: {
        openapi: '3.0.1',
        info: {
            title: 'Doc MyProject',
            description: "Projecto backend Coderhouse"
        },
        contact: {
            name: "soporte",
            url: 'https://www.example.com.ar',
            email: 'lucianoorodriguez1@gmail.com'
        }
    },
    apis: [`${dirname}/docs/*.yaml`]
}

const specs = swaggerJSDoc(swaggerOptions)

router.get('/', swaggerUIExpress.serve,swaggerUIExpress.setup(specs))

