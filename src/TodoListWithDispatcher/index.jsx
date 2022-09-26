import React, { useEffect } from "react";
import AddTodoForm from "./AddTodoForm.jsx";
import TodoList from "./TodoList.jsx";
import { useTaskReducer } from "@/shared";
import {
  initState,
  actions,
  INIT_TODO,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
} from "./store";

export const TodoCtx = React.createContext(null);

export default function TodoListWithDispatcher() {
  const [state, dispatch] = useTaskReducer(initState, actions);

  // 添加TODO
  const addTodo = (data) => dispatch(ADD_TODO, data);

  // 切换
  const toggleTodo = (data) => dispatch(TOGGLE_TODO, data);

  // 删除
  const removeTodo = (data) => dispatch(REMOVE_TODO, data);

  useEffect(() => {
    // 获取todo
    dispatch(INIT_TODO);
  }, []);

  return (
    <div>
      <h2>TodoList with dispatcher</h2>
      <AddTodoForm todos={state.todos} addTodo={addTodo} />
      <TodoCtx.Provider value={{ toggleTodo, removeTodo }}>
        <TodoList {...state} />
      </TodoCtx.Provider>
    </div>
  );
}
