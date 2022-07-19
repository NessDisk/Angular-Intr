const express = require("express");
const router = express.Router()
const {getItems, getItem, CreateItem, UpdateItem, deliteItem} = require("../controllers/tracks")
const customHeader = require("../middleware/customHeader")
const authMiddleware = require("../middleware/session")

const CheckRol = require("../middleware/rol")
const {validatorCreateItem, validatorGetIem}  = require("../validators/tracks")
 

//lista de items
router.get("/", authMiddleware ,getItems)


//lista de item
router.get("/:id",authMiddleware, validatorGetIem,getItem)


//crear un iten
router.post("/", authMiddleware,CheckRol(["admin"]) ,validatorCreateItem, customHeader,CreateItem)


//lusta de item
router.put("/:id", authMiddleware, validatorGetIem, validatorCreateItem,UpdateItem)

//lusta de item
router.delete("/:id",authMiddleware, validatorGetIem,deliteItem)


module.exports = router