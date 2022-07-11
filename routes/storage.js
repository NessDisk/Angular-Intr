
const express = require("express");
const router = express.Router()
const UploadMiddleware = require("../utils/handleStorage")
const {validatorGetIem}  = require("../validators/storage")
const {CreateItem, getItems, GetItem, UpdateItem, deliteItem} = require("../controllers/storage")
/*
obtener items

*/

router.get("/",getItems)

/*
obtener detalle item

*/

router.get("/:id", validatorGetIem,GetItem)

/*
obtener item

*/

router.post("/",UploadMiddleware.single("myfile") ,CreateItem)

router.put("/:id", validatorGetIem,UpdateItem)

router.delete("/:id", validatorGetIem,deliteItem)

module.exports = router