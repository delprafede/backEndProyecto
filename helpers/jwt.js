const jwt = require("jsonwebtoken")
const configEnv  = require("../config")


function createAccesToken(paylod) {
   return new Promise((resolve, reject) => {
    jwt.sign(
        paylod,
       configEnv.tokenSecret,
        {
            expiresIn: '1d'
        },

        (err, token) => {
            if (err) reject(err);
            resolve(token)
        }
    )
   }
   )
}

module.exports = createAccesToken




