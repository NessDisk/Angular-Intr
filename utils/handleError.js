const handleHttpError = (res, message ="Algo sucede", code =403)=>{
    res.status(code)
    res.send({error:message})
    
}

module.exports =  {handleHttpError}