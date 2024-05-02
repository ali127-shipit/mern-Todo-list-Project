const express  = require("express");
const todoModel = require("../models/todoModels")
const router = express.Router();
const {create , get , getById, update, deleteObject} = require("../controllers/TodoControllers")

router.get("/" ,get);

router.get("/:id" , getById);

router.post("/" , create);

router.put("/:id",update);

router.delete("/:id" , deleteObject);

module.exports = router