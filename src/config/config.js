import dotenv from 'dotenv'
import path  from 'path'

dotenv.config({path: "../.env"})

export const CONFIG = {
    mongo: {
        URI: process.env.MONGO_URI || 'mongodb+srv://lucianoorodriguez1:PKZdDQFYLyzJ7G33@ecommercecluster.eonxrvw.mongodb.net/ecommerce'
    },
    mailing: {
        SERVICE: process.env.MAILING_SERVICE || '',
        USER: process.env.MAILING_USER || '',
        PASSWORD: process.env.MAILING_PASSWORD || ''
    },
    jwt: {
        COOKIE: process.env.JWT_COOKIE || '',
        SECRET: process.env.JWT_SECRET || ''
    },
    PORT: process.env.PORT || 8080,
    DATASOURCE: process.env.DATASOURCE || 'MONGO',
    ENVIRONMENT: process.env.ENVIRONMENT || 'prod'
}

