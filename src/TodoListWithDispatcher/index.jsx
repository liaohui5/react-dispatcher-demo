import React from "react";
import AddTodoForm from "./AddTodoForm.jsx";
import TodoList from "./TodoList.jsx";
import { todoReducer } from "./store";

export const TodoCtx = React.createContext(null);

export default function TodoListWithDispatcher() {
  const [state, todoDispatch] = todoReducer();
  return (
    <div>
      <h2>TodoList with dispatcher</h2>
      <AddTodoForm todos={state.todos} todoDispatch={todoDispatch} />
      <TodoCtx.Provider value={{todoDispatch}}>
        <TodoList {...state} />
      </TodoCtx.Provider>
    </div>
  );
}
