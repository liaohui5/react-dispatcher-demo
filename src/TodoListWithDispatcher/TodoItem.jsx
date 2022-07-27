import { useContext } from "react";
import { TOGGLE_TODO, REMOVE_TODO } from "./store";
import { TodoCtx } from ".";

export default function TodoItem(props) {
  const { todoDispatch } = useContext(TodoCtx);
  const { id, content, completed } = props.todo;
  const todoStyle = completed
    ? { color: "red", textDecoration: "line-through" }
    : null;

  const toggleTodo = () => {
    todoDispatch({
      type: TOGGLE_TODO,
      payload: { id, completed: !completed },
    });
  };

  const removeTodo = () => {
    todoDispatch({
      type: REMOVE_TODO,
      payload: id,
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={completed ? "checked" : ""}
        onChange={toggleTodo}
      />
      <span style={todoStyle}>{content}</span>
      <button onClick={removeTodo}>删除</button>
    </div>
  );
}
