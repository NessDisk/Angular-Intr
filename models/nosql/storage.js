const mongoose = require("mongoose")


const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{
            type:Number
        }

    },
    {
        versionKey: false,
        timestamps:true ,//TODO createdA , updateAt
    }

)

module.exports = mongoose.model("storage",StorageScheme)