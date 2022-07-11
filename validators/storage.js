const{check} = require("express-validator")
const validateResult = require("../utils/handleValidator")




const validatorGetIem =[
   
    check("id").exists().notEmpty().isMongoId(),
        (req , res, next) =>{
            return validateResult(req , res, next)
        }
    
    ]


module.exports = { validatorGetIem}