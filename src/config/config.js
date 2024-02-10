const dotenv = require('dotenv')
const path = require('path')

dotenv.config({path: path.resolve(__dirname,"../.env")})

const CONFIG = {
    MONGO_URI: process.env.MONGO_URI || '',
    PORT: process.env.PORT || 8080,
    DATASOURCE: process.env.DATASOURCE || ''
}

module.exports = CONFIG 