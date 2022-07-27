import * as React from "react";

import { Routes, Route, Link } from "react-router-dom";
import TodoListWithDispatcher from "./TodoListWithDispatcher";
import TodoList from "./TodoList";

import "./app.css";

export default function App() {
  const links = [
    {
      text: "TodoList",
      path: "/",
    },
    {
      text: "TodoList-with-dispatcher",
      path: "/with_dispatcher",
    },
  ];

  return (
    <div className="App">
      <div>
        {links.map((item) => (
          <Link className="link-item" to={item.path} key={item.path}>
            {item.text}
          </Link>
        ))}
      </div>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/with_dispatcher" element={<TodoListWithDispatcher />} />
      </Routes>
    </div>
  );
}
