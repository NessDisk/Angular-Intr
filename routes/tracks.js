const express = require("express");
const router = express.Router()
const {getItems, GetItem, CreateItem} = require("../controllers/tracks")

router.get("/",getItems)

router.post("/",CreateItem)

module.exports = router