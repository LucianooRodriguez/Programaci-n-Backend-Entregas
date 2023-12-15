const { Router } = require('express')

const router = Router()

router.get('/home',(req,res) => {
    console.log(req.session)
    res.render('home', {data: req.session})
})


module.exports = router