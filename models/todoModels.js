const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("list", todoSchema);