const express = require("express");
const todoCtrl = require("../controllers/todoCtrl");
const route = express.Router();

route.post("/add", todoCtrl.addTodo);
route.get("/get-one-by-title", todoCtrl.getOneBytitle);
route.post("/update-one-by-id", todoCtrl.updateById);
route.delete("/delete/:id", todoCtrl.deleteById);

module.exports = route;