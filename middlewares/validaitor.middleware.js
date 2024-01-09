// const registerSchema = require("../schemas/auth.schenma")

const validateSchema = (registerSchema) => 
(req, res, next) => {
 
    // try {
    //    schema.parse(req.body);
    //    next();
    //   } catch (error) {
    //     console.log(error)
    //     return res.status(400).json({ error,
    //       messaje: "no entra al schema"  });
    //     }
   console.log(registerSchema)
  };

module.exports = validateSchema;
