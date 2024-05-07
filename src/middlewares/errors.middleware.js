
import { EError }from "../utils/EError.js"

export const errMiddleware = (error, req, res, next) => {
    switch (error.code) {
        case EError.INVALID_TYPES_ERROR:
            res.send({ status: "Error", error: error.name })
            break
        default:
            res.send({ status: "Error", error: "Unknown error" })
    }
}
