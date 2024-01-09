const dotenv = require("dotenv")
dotenv.config()


  const configEnv = {
    appPort : {
        port : process.env.APP_PORT, 
    },
    dbConfig: {
        host : process.env.DB_MONGODB,
    },
    salt: process.env.BCRYPT_SALT,
    tokenSecret: process.env.TOKEN_SECRET
}



module.exports = configEnv