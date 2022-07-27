import { useState } from "react";

import { ADD_TODO } from "./store";

export default function AddTodoForm(props) {
  const [content, setContent] = useState("");

  const addTodo = () => {
    for (const todo of props.todos) {
      if (todo.content === content) {
        alert("当前任务已经存在,请不要重复添加");
        return;
      }
    }

    props.todoDispatch({
      type: ADD_TODO,
      payload: {
        id: Date.now() + Math.random(),
        content,
        completed: false,
      },
    });

    setContent("");
  };

  return (
    <div>
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={addTodo}>添加</button>
    </div>
  );
}
