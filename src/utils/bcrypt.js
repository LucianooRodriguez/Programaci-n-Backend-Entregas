import bcrypt from "bcrypt"

export const createHash = (data) => {
    return bcrypt.hashSync(data, bcrypt.genSaltSync(10))
}

export const isValidPassword = (user, password) => {
    return bcrypt.compareSync(password, user.password)
}

