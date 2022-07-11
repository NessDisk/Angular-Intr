const {tracksModel } = require("../models")
const {handleHttpError} = require("../utils/handleError")
const {matchedData} = require("express-validator")


const getItems = async (req, res) =>{

    try{
        
            const data = await tracksModel.find({})
            res.send({data})

    }catch(e)
    {
        handleHttpError(res,"ERROR_GET_ITEMS")
    }



}

const getItem = async  (req, res) =>{
    try{
        req =  matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id)
        res.send({data})

    }catch(e){
        handleHttpError(res,"ERROR_GET_ITEM")
    }


}
const CreateItem =  async  (req, res) =>{

    try{
        // const body = req.body
        const body = matchedData(req)
         
        
        
        // const {body} = req  
        // console.log(body)
        const data = await tracksModel.create(body)
    
        res.send({data})

        }catch(e)
        {
            handleHttpError(res,"ERROR_CREADO_ITEMS")
        }





}
const UpdateItem = async (req, res) =>{

    try{
        const {id, ...body} =  matchedData(req);
  
        const data = await tracksModel.findByIdAndUpdate(
            id, body
            )
        res.send({data})

    }catch(e){
        handleHttpError(res,"ERROR_UPPDATE_ITEM")
    }


}
const deliteItem =async (req, res) =>{
    
    try{
        req =  matchedData(req);
        const {id} = req;
        const data = await tracksModel.delete({_id:id})
        res.send({data})

    }catch(e){
        handleHttpError(res,"ERROR_DELITE_ITEM")
    }

}

module.exports ={ getItems,getItem ,CreateItem, UpdateItem, deliteItem}