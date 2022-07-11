const fs = require("fs")
const {storageModel} = require("../models")

const PUBLIC_URL = process.env.PUBLIC_URL;
const  MEDIA_PATH = `${__dirname}/../storage`

const {handleHttpError} = require("../utils/handleError")
const {matchedData} = require("express-validator")


const getItems = async (req, res) =>{
    try{
        const data = await storageModel.find({})
        res.send({data})
    }catch(e)
    {
        handleHttpError(res, "ERROR_UPDATE_ITEMS")
    }

}

const GetItem = async (req, res) =>{
    try{
        const {id} = matchedData(req)
        const data = await storageModel.findById(id)
        res.send({data})
    }catch(e)
    {
        handleHttpError(res, "ERROR_DETAIL_ITEM")
    }
}
const CreateItem =  async  (req, res) =>{
  
  try{
    const {body , file} = req  
    console.log(file)
    const fileData ={
        filename: file.filename,
        url:`${PUBLIC_URL}/${file.filename}`

    }
const data = await storageModel.create(fileData)
    res.send({data})

  }catch(e){

 handleHttpError(res, "ERROR_CREATE_ITEMS")
 
  }
    

}


const deliteItem = async (req, res) =>{
    try{
        const {id} = matchedData(req)
        const datafile = await storageModel.findById(id)

        await storageModel.delete({_id:id})

        const {filename} = datafile;
        const filePath = `${MEDIA_PATH}/${filename}`
        fs.unlinkSync(filePath)

        const data = {
            filePath,
            deleted:1
        }

        res.send({data})
    }catch(e)
    {
        handleHttpError(res, "ERROR_DETAIL_ITEM")
    }
}


const UpdateItem = async (req, res) =>{

}

module.exports ={ getItems,GetItem ,CreateItem, UpdateItem, deliteItem}