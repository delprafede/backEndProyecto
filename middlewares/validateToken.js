const jwt = require("jsonwebtoken")
const configEnv = require("../config")

const authRequired = (req, res, next) => {
  const { token } = req.cookies;
  if (!token)
    return res.status(401).send({
      message: "sin autorizacion",
    });
   jwt.verify(token, configEnv.tokenSecret, (err, user) => {
    if(err) return res.status(403).send({
        message: "token invalido"
    })
    req.user = user
   })
  next();
};
module.exports = authRequired;
