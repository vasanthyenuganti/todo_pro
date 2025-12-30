const express = require("express");
const cors = require("cors");
const connectToDB = require("./configs/db");

const todoRoutes = require('./routes/todoRoutes');

const app = express();
app.use(cors())
app.use(express.json());
app.use("/api/todo", todoRoutes)


app.get("/", (req, res) => {
    res.status(200).json({ "message": "backend" });
})

app.listen(4000, () => {
    console.log("Server run");

    // connect to mongo
    connectToDB()
})