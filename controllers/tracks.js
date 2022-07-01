const {tracksModel } = require("../models")




const getItems = async (req, res) =>{
    const data = await tracksModel.find({})


    res.send({data})
}

const GetItem = (req, res) =>{

}
const CreateItem =  async  (req, res) =>{
    const {body} = req  
    console.log(body)
    const data = await tracksModel.create(body)

    res.send(data)

}
const UpdateItem = (req, res) =>{

}
const deliteItem = (req, res) =>{

}

module.exports ={ getItems,GetItem ,CreateItem, UpdateItem, deliteItem}