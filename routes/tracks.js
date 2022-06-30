const express = require("express");
const router = express.Router()
const {getItems, GetItem} = require("../controllers/tracks")

router.get("/",getItems)

router.get("/:id",GetItem)

module.exports = router