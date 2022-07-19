 require("dotenv").config()
const express = require("express")
const cors = require("cors")
const dbConnectNoSql = require('./config/mongo')
const app = express()
const morganBody = require("morgan-body")
const ENGINE_DB = process.env.ENGINE_DB;

const loggerStream = require("./utils/handleLogger")
const { dbConnectMySQL } = require("./config/mysql")

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))




morganBody(app,{
    noColors: true,
    stream: loggerStream,
    skip:function(req, res){
        return res.statusCode < 400 // omite todos los status menores que 400 en monitor de errores
    }
})
const  port =process.env.PORT || 3000;

/* 
 invocamos las rutas :)
*/

app.use("/api", require("./routes"))

app.listen(port,() => {
    console.log(`Tu app esta lista por http://localhost:${port}`)
})


if(ENGINE_DB === `nosql`)
 {

    dbConnectNoSql()

 } else{

    dbConnectMySQL();   

} 