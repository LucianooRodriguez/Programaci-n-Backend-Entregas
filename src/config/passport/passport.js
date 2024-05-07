import passport from "passport"
/* const LocalStrategy = require("passport-local") */

/* JWT */

import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt"


export const initializePassport = () => {


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
