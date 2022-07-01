const express = require("express");
const router = express.Router()
const {getItems, GetItem, CreateItem} = require("../controllers/tracks")



router.post("/",(req,res)=>{
    res.send({a:1})
})

module.exports = router