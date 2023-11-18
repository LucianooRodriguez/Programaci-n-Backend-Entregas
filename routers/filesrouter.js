const { Router } = require('express')
const uploader = require('../middlewares/middleware.js')
const router = Router()



router.post('/api/files', uploader.single('file') ,(req, res) => {
    res.send("ok")
})

module.exports = router;