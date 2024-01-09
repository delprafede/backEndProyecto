const mongoose = require("mongoose")

mongoose.pluralize(null)

const collection = 'users'

const schema = new mongoose.Schema({
    name: { type: String, require: true, trim: true },
    email: { type: String, require: true, trim: true, unique: true },
    password: { type: String, require: true }
},{
    timestamps: true
})
module.exports= mongoose.model(collection, schema )