const {handleHttpError} = require("../utils/handleError")
/**
 * 
 * @param {Array con los roles permitidos} rol 
 * @returns 
 */
const CheckRol = (roles)=>(req, res, next) =>{


    try{
        const {user} = req;
        console.log(user.role.type)
        const rolesByUser = user.role.type;

        const cheackValueRol = roles.some((rolsingle)=>rolesByUser.includes(rolsingle)) // TODO: true or false dependediendo si el rol lo tiene el ususario del parametro pasado. 
        if(!cheackValueRol){
            handleHttpError(res,"USER_NOT_PERMISSIONS", 403)
            return
        }

        next();
    }catch(e)
    {
        handleHttpError(res,"NOT_PERMISSIONS", 403)
    }

}

module.exports = CheckRol