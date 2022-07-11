const mongoose = require("mongoose")
const mongooseDelete = require("mongoose-delete")

const StorageScheme = new mongoose.Schema(
    {
        url:{
            type:String
        },
        filename:{ 
            type:String
        }

    },
    {
        versionKey: false,
        timestamps:true ,//TODO createdA , updateAt
    }

)


StorageScheme.plugin(mongooseDelete, {overrideMethods:"all"})
module.exports = mongoose.model("storage",StorageScheme)