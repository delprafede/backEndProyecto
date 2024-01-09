const app = require("./app")


const configEnv = require("../config")
const connectDb = require("./db")


const { appPort } = configEnv


try {
    connectDb()
    
    app.listen(appPort.port, () => {
        console.log(`Servidor corriendo en puerto: ${appPort.port}`)
    })
} catch (err) {
    console.log(`ERROR al inicializar backend: ${err.message}`)
}