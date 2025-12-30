const Todo = require("../models/todoModel");


const addTodo = async (req, res) => {
    try {
        const { title, dis, endDate, isPrimary } = req.body;

        const todo = new Todo({
            title: title,
            dis: dis,
            endDate: endDate,
            isPrimary: isPrimary
        })

        await todo.save();
        res.status(201).json({ "data": todo });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {addTodo}