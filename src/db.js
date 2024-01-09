const mongoose = require("mongoose")
const configEnv = require("../config")
const { dbConfig } = configEnv

const connectDb = async () => {
try {
    await mongoose.connect(dbConfig.host)
    console.log("db conectada correctamente")
} catch (error) {
    console.log(`error al conectar db ${error}`)
}
}
module.exports= connectDb
//ZUgzB4FD3reL0SPw