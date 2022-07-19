const {handleHttpError} = require("../utils/handleError")
const {verificarToken} = require("../utils/handleJwt")
const {usersModel} = require("../models")

const getProperties = require("../utils/HandlePropertiesEngine")
const propertikey = getProperties();


const authMiddleware = async ( req, res, next) =>{
    try{
        if(!req.headers.authorization){
            handleHttpError(res,"NOT_TOKEN", 401)
            return;
        }
        const token = req.headers.authorization.split(' ').pop();
        const dataToken = await verificarToken(token)
     
        if(!dataToken){
            handleHttpError(res,"No_PAYLOAD_DATA", 401)
            return;

        }
        
        const query ={
            [propertikey.id]: dataToken[propertikey.id]
        }



        const user =  await usersModel.findOne(query)
        req.user = user;

        next()

    }catch(e){

        handleHttpError(res,"NOT_SESSION", 401)

    }

}


module.exports = authMiddleware

