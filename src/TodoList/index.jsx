import React from "react";
import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";

export const TodoCtx = React.createContext(null);

export default function () {
  const [addCount, setAddCount] = useState(0);
  const [removeCount, setRemoveCount] = useState(0);

  const [todos, setTodos] = useState([
    { id: 101, content: "晒衣服", completed: false },
    { id: 102, content: "做笔记", completed: false },
    { id: 103, content: "取快递", completed: true },
    { id: 104, content: "倒垃圾", completed: false },
  ]);

  function addTodo(text, setText) {
    const content = text.trim();
    if (!content) return;
    for (const item of todos) {
      if (item.content === content) {
        alert("任务已经存在, 不要重复添加");
        break;
      }
    }
    todos.push({
      id: Math.floor(Math.random() + Date.now()),
      content,
      completed: false,
    });
    setTodos(todos);
    setAddCount(addCount + 1);
    setText("");
  }

  function removeTodo(id) {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
    setRemoveCount(removeCount + 1);
  }

  function toggleTodo({ id, completed }) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.completed = completed;
      }
      return item;
    });
    setTodos(newTodos);
  }

  return (
    <div>
      <h2>TodoList</h2>
      <AddTodoForm addTodo={addTodo} />
      <TodoCtx.Provider value={{ removeTodo, toggleTodo }}>
        <TodoList {...{ todos, addCount, removeCount }} />
      </TodoCtx.Provider>
    </div>
  );
}
