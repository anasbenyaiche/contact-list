const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:Number, required:true},
    phone:{type:String,required:true}
}) 

const User = mongoose.model('users',userSchema)
module.exports = User