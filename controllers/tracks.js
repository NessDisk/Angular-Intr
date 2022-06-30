const {tracksModel } = require("../models")




const getItems = async (req, res) =>{
    const data = await tracksModel.find({})


    res.send({data})
}

const GetItem = (req, res) =>{

}
const CreateItem = (req, res) =>{

}
const UpdateItem = (req, res) =>{

}
const deliteItem = (req, res) =>{

}

module.exports ={ getItems,GetItem ,CreateItem, UpdateItem, deliteItem}