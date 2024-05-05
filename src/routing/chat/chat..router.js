const { Router } = require('express')
const router = Router()

const { isAuthorized } = require("../../middlewares/jwt.middleware")


router.get('/', (req, res) => {
    res.render('chat', { style: "style.css" })
})

module.exports = router;