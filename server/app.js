"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const TodoDB = require("./TodoDB");
const { resolve } = require("path");

const PORT = 8383;
const app = express();
const db = new TodoDB(resolve(__dirname, "./todos.json"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// allow cross domain requests
app.use("*", (req, res, next) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Method": "GET,POST,PUT,DELETE,PATCH,OPTION",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  for (const [key, val] of Object.entries(headers)) {
    res.setHeader(key, val);
  }
  next();
});

app.get("/init_data", (req, res) => {
  const initData = [
    {
      id: 101,
      content: "洗衣服",
      completed: false,
    },
    {
      id: 102,
      content: "拿快递",
      completed: true,
    },
    {
      id: 103,
      content: "写代码,做笔记",
      completed: false,
    },
  ];
  db.write(initData);

  res.json({
    code: 0,
    data: null,
    msg: "ok",
  });
});

app.get("/get_todos", (req, res) => {
  const data = db.read();
  res.json({
    code: 0,
    data,
    msg: "ok",
  });
});

app.post("/add_todo", (req, res) => {
  const { content } = req.body;
  const todos = db.read();
  const newTodoItem = {
    id: Math.floor(Math.random() + Date.now()),
    completed: false,
    content,
  };
  todos.push(newTodoItem);
  db.write(todos);

  res.json({
    code: 0,
    data: newTodoItem,
    msg: "ok",
  });
});

app.post("/toggle_todo", (req, res) => {
  const { id, completed } = req.body;
  const todos = db.read();
  for (let todo of todos) {
    if (todo.id === id) {
      todo.completed = completed;
      break;
    }
  }
  db.write(todos);

  res.json({
    code: 0,
    data: null,
    msg: "ok",
  });
});

app.post("/remove_todo", (req, res) => {
  const newTodos = db.read().filter((item) => item.id !== req.body.id);
  db.write(newTodos);

  res.json({
    code: 0,
    data: null,
    msg: "ok",
  });
});

app.listen(PORT, () => {
  console.log(`server started on http://localhost:${PORT}`);
});
