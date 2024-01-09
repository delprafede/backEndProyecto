const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const authRouters = require("../routes/auth.ruotes")


const app = express()


app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cors({
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 204
    }))
    app.use(cookieParser())
  
app.use("/api", authRouters)


module.exports = app

//postman:127.0.0.1:4000/register