const { Router } = require('express')
const router = Router()
const { isAuthorized } = require("../middlewares/jwt.middleware")

router.get('/home',isAuthorized, (req, res) => {
    res.render('home', { data: req.session })
})

module.exports = router