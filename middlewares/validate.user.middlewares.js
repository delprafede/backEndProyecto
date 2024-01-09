const { body, validationResult } = require("express-validator");

const validateUser = (req, res, next) => {
  const { email, password } = req.body;
  if (email === "" || email === null || email === undefined) {
    res.status(400).send({
      ok: false,
      error: "El email es obligatorio",
    });
    console.log("validateUser")
  }

  if (password === "" || password === null || password === undefined) {
    res.status(400).send({
      ok: false,
      error: "El password es obligatorio",
    });
  }
  console.log("estas registrado");
  next();
};

// const validateExpress = [ 
  
 
// body("name", "Ingrese un monbre valido").exists().isLength({ min: 4 }),
// body("email", "Ingrese un email valido").exists().isEmail().normalizeEmail(),
// body("password", "Ingrese un password valido")
//   .exists()
//   .isNumeric()
//   .isLength({ min: 6 })

//   const result = validationResult(req);
//   if (result.isEmpty()) {
//     return res.send(`Hello, ${req.query.name}!`);
//   }

//   res.send({ errors: result.array() });
//   (req, res, next) => {
//     next();
//   };
// ]

module.exports = validateUser;
