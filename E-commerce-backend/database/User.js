const mongoose = require ('mongoose')
const Schema = mongoose.Schema;

const UserTable= new Schema({
    id:{
        type:String,
        required:false
    },
    name:{
        type: String,
        required:true
    },
    pwd:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});

module.exports= mongoose.model('User',UserTable)

