const bcryptjs = require("bcryptjs")


/**
 *  contraseña sin encriptar
 * @param {*} passwordPlane
 */
const encrypt =async (passwordPlane) =>{
    const hash = await bcryptjs.hash(passwordPlane, 10 )
    return hash
}


/**
 * pasar contraseña sin encriptar y pasar contraseña encriptada.
 * @param {*} passwordPlain
 * @param {*} hashPassword 
 */
const compare =async (passwordPlane , hasspassword) =>{

    return await bcryptjs.compare(passwordPlane , hasspassword)

}

module.exports = {encrypt, compare }