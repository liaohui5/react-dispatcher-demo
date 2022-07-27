import { useState } from "react";

export default function AddTodoForm(props) {
  const { addTodo } = props;
  const [content, setContent] = useState("");
  return (
    <div>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={() => addTodo(content, setContent)}>添加</button>
    </div>
  );
}
