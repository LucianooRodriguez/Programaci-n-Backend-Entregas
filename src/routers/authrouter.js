const { Router } = require('express')
const router = Router()
const path = require("path")
const userModel = require('../dao/models/user.model.js')



router.get('/auth/login', (req, res) => {
  
    res.render("login", {})
})

router.post('/auth/login', (req, res) => {

    userModel.findOne({ email: req.body.email }).then((user) => {

        if (user.password == req.body.password) {
            req.session.email = user.email
            req.session.password = user.password
            req.session.age = user.age
            req.session.name = user.name
            req.session.rol = user.rol

            res.redirect('/home')
        } else {
            res.send("Incorrect password")
        }
    })

})

router.get('/auth/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err) res.send(err)
        res.redirect("/auth/login")
    })
})

router.get("/auth/register", (req, res) => {
    res.render("register", {})
})

router.post("/auth/register", (req, res) => {

    let user = {}
    user.name = req.body.name
    user.email = req.body.email
    user.password = req.body.password
    user.age = req.body.age

    user.rol = "user"

    userModel.create(user)
    res.redirect("/auth/login")
})

router.get("/profile", (req, res) => {
    res.render("profile", { data: req.session })
})

router.get("/users", (req,res) => {
    userModel.find({}).then((users) => {
        res.send(users)
    })
})

module.exports = router;