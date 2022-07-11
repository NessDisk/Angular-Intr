const express = require("express");
const router = express.Router()
const {getItems, getItem, CreateItem, UpdateItem, deliteItem} = require("../controllers/tracks")
const customHeader = require("../middleware/customHeader")
const {validatorCreateItem, validatorGetIem}  = require("../validators/tracks")
 

//lusta de items
router.get("/",getItems)


//lusta de item
router.get("/:id", validatorGetIem,getItem)


//crear un iten
router.post("/", validatorCreateItem, customHeader,CreateItem)


//lusta de item
router.put("/:id",validatorGetIem, validatorCreateItem,UpdateItem)

//lusta de item
router.delete("/:id",validatorGetIem,deliteItem)


module.exports = router