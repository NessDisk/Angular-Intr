const {matchedData} = require("express-validator")
const {encrypt, compare} = require("../utils/handlePassword")
const {tokenSing} = require("../utils/handleJwt")
const {usersModel} = require("../models/index")
const {handleHttpError} = require("../utils/handleError")



/**
 * este controlador es el encargado de restrar a los usuarios.
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) =>{

    try{

        req =  matchedData(req)
        const password = await encrypt(req.password);
        const body = {...req, password}
        const dataUSer = await usersModel.create(body)
        // previene que el la propiedad se 
        dataUSer.set("password", undefined , {strict : false})
        
        const data={
            token : await tokenSing(dataUSer), 
            user: dataUSer
        }
    
        res.send({data})
    }catch(e){

        handleHttpError(res,"ERROR_REGISTER_USER")
    }


   
    }


//-------------------
const loginCtrl = async (req, res) =>{
    try{
        req =  matchedData(req)
        
        const user =  await usersModel.findOne({email:req.email}).select("password name role email")
        
        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return;
        }
        
        const HasPassword  = user.get('password');
        
        const check = await compare( req.password, HasPassword)
        
        if(!check){
            handleHttpError(res, "  Password_INVALID", 401)
            return;
        }

         user.set('password', undefined, {strict: false} )
        const data ={
            token: await tokenSing(user),
            user
        }

        res.send({data})


    }catch(e){

        handleHttpError(res,"ERROR_LOGIN_USER")
    }
}


module.exports = {registerCtrl, loginCtrl}