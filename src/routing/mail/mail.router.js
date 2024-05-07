import { Router } from 'express'
export const router = Router()

import{ CONFIG }from "../../config/config.js"

import nodemailer from 'nodemailer'



const transport = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    auth: {
        user: 'lucianoorodriguez1@gmail.com',
        pass: 'aijq eafu ukhv edxp'
    }
})

router.get('/restore-password',  async (req, res) => {
    let result = await transport.sendMail({
        from: 'My Project <lucianoorodriguez1@gmail.com>',
        to: 'lucianoorodriguez1@gmail.com',
        subject: 'Restore Password',
        html: `
        <div>
            <h1> Restore Password </h1>
            <p>Podras reestablecer tu contraseña ingresando al link a continuacion </p>
            <a href="http://localhost:${CONFIG.PORT}/api/auth/restore-password"> Restore password </a>
        </div>
        `,
        attachments:[]
    })
    res.send({status:'success',result:"Email sent"})
})

