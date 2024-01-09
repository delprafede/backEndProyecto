const bcrypt = require("bcrypt")
// const  configEnv  = require("../config");

// const { salt } = configEnvrs
const salt = 10

// console.log(configEnv)
async function Hash(password) {
    return await bcrypt.hash(password, salt)
};
async function Compare(password, hash) {
    return await bcrypt.compare(password, hash)
};


module.exports = Hash, Compare 