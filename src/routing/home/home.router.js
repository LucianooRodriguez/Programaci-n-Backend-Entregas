const { Router } = require('express')
const router = Router()

const passport = require("passport")

const { passportCall } = require("../../utils/passport")
const { isAuthorized } = require("../../middlewares/jwt.middleware")
const { applyPolicy } = require("../../middlewares/auth.middleware")

router.get('/', applyPolicy(["user","admin"]), (req, res) => {
    res.render('home', { data: req.session })
})

module.exports = router