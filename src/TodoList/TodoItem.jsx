import { useContext } from "react";
import { TodoCtx } from ".";

export default function TodoItem(props) {
  const { removeTodo, toggleTodo } = useContext(TodoCtx);
  const { id, content, completed } = props.todo;

  const todoStyle = completed
    ? { color: "red", textDecoration: "line-through" }
    : null;

  return (
    <div>
      <input
        type="checkbox"
        checked={completed ? "checked" : ""}
        onChange={() => toggleTodo({ id, completed: !completed })}
      />
      <span style={todoStyle}>{content}</span>
      <button onClick={() => removeTodo(id)}>删除</button>
    </div>
  );
}
