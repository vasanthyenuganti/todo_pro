const express = require("express");
const todoCtrl = require("../controllers/todoCtrl");
const route = express.Router();

route.post("/add",todoCtrl.addTodo);

module.exports = route;