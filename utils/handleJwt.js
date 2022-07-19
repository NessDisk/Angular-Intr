const jwt = require("jsonwebtoken")
const JWT_SECRET = process.env.JWT_SECRET
const getProperties = require("../utils/HandlePropertiesEngine")
const propertikey = getProperties();
/**
 * Debes psasrle el objeto usuario
 * @param {*} user 
 */
const tokenSing = async (user) =>{


const sing = await jwt.sign({
    [propertikey.id]: user[propertikey.id] , 
    role: user.role
},
JWT_SECRET,
{expiresIn:"2h"}
)

return sing

}

/**
 * debes pasar el token de sesion.
 * @param {*} tokenJwt 
 * @returns 
 */
const verificarToken = async(tokenJwt) =>{
            try{

                return  jwt.verify(tokenJwt, JWT_SECRET)
            }catch(e){

                return null;
            }
}




module.exports = {tokenSing,verificarToken}