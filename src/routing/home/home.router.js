import { Router } from 'express'
export const router = Router()

import { applyPolicy } from "../../middlewares/auth.middleware.js"

router.get('/', applyPolicy(["user","admin"]), (req, res) => {
    res.render('home', { data: req.session })
})

