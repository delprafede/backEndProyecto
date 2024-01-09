const Router = require("express")
const { register, login, logout, profile,  } = require("../controllers/auth.controllers")
const validateUser = require("../middlewares/validate.user.middlewares")
const authRequired = require("../middlewares/validateToken")
// const validateSchema = require("../middlewares/validaitor.middleware")
// const { registerSchema, loginShema } = require("../schemas/auth.schenma")


const router = Router()

router.post("/register",validateUser, register)//registrarse

router.post("/login", login)//loguearse

router.post("/logout", logout)//cerrar sesion

router.get("/profile", authRequired, profile)//rutas protegidas con token


module.exports= router

2722920012