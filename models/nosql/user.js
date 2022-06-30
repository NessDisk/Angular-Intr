const mongoose = require("mongoose")


const UserScheme = new mongoose.Schema(
    {
        name:{
            type:String
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String,
            
        },
        role:{
            type:{
                type:["user","admin"],
                default:"user",
            }
        }

    },
    {
        versionKey: false,
        timestamps:true ,//TODO createdA , updateAt
    }

)

module.exports = mongoose.model("user",UserScheme)