const passport = require("passport")
/* const LocalStrategy = require("passport-local") */

/* JWT */

const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt

const userModel = require("../../models/schema/users.schema")
const { createHash, isValidPassword } = require("../../utils/bcrypt")

const initializePassport = () => {


    passport.use("jwt", new JwtStrategy({
        jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        secretOrKey: "mysecretcoderjwt"
    }, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload)
        } catch (err) {
            console.log("err")
            return done(null, false)
        }
    }))
}

const cookieExtractor = (req) => {
    let token = null
    if ( req && req.cookies ) {
        token = req.cookies['jwtCookie']
    }

    return token
}

module.exports = { initializePassport }