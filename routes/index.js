const express = require("express");
const fs = require("fs")
const router = express.Router()


const PATH_ROUTES = __dirname;
// console.log(PATH_ROUTES)
const removeExtension =(fileName) =>{
    // TODO tracks.js [tracks, js]
    return fileName.split('.').shift()
}


 fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtension(file) // todo user , stoage
    
    if(name !== "index")
    {
        // console.log(`Cargando ruta ${name}`)
        router.use(`/${name}`, require(`./${file}`)) // TODO  http://localhost:localhost/api/xxxxx
    }
})

module.exports = router