import { CONFIG as config } from '../config/config.js'
import winston from 'winston'

export const logger = {
    dev: [
        new winston.transports.Console({level: 'debug'}),
        new winston .transports.File({filename: './logs.log'})
    ],
    prod: [
        new winston.transports.Console({level:'http'}),
        new winston.transports.File({filename: './error.log'})
    ]
}

export const addLogger = ( req,res, next) => {
    req.logger = winston.createLogger({
        transports: logger[config.ENVIRONMENT]
    })

    req.logger.http(`${req.method} at ${req.url} - ${ new Date().toLocaleDateString()} `)
    next()
}

