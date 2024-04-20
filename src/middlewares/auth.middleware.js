const applyPolicy = (roles) => {
    return (req, res, next) => {
        console.log(req.session.rol)
        if (!roles.includes(req.session.rol)) {
            return res.status(401).send({ status: "error", error: "Not authenticated" })
        } else {
            next()
        }
    }
}

const isLogged = (req, res, next) => {
    if (req.user) {
        next()
    } else {
        res.send("Not authorized")
    }
}

module.exports = {
    applyPolicy,
    isLogged
}