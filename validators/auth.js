const{check} = require("express-validator")
const validateResult = require("../utils/handleValidator")



const validatorRegister=[
   
    check("name").exists().notEmpty().isLength({min:3, max:99}),
    check("age").exists().notEmpty().isNumeric(),
    check("password").exists().notEmpty().isLength({min:3, max:15}),
    check("email").exists().notEmpty().isEmail(),
    (req , res, next) =>{
            return validateResult(req , res, next)
        }
    
    ]


    const validatorLoguin=[
   
        check("password").exists().notEmpty().isLength({min:3, max:15}),
        check("email").exists().notEmpty().isEmail(),
        (req , res, next) =>{
                return validateResult(req , res, next)
            }
        
        ]


module.exports = { validatorRegister , validatorLoguin}