const express = require("express");

const router = express.Router();

const Todo = require("../models/todo");

router.get("/todoList", (req, res) => {
  console.log("connected to list");
  Todo.find()
    .then((todos) => res.json(todos))
    .catch((err) => res.json({ message: "No Todo's are found" }));
});

router.post("/addTodo", (req, res) => {
  let todo = new Todo({
    title: req.body.title,
  });

  todo
    .save()
    .then(() => res.send({ message: "Item added successfully" }))
    .catch((err) =>
      res.status(400).send({ message: "Failed to add Item", error: err })
    );
});

router.post("/deleteTodo", (req, res) => {
  console.log("connected to delete");
  Todo.findByIdAndRemove(req.body.id)
    .then((resp) => res.send({ message: "Item deleted successfully" }))
    .catch((err) => res.send({ message: "Failed to remove item" }));
});

module.exports = router;
