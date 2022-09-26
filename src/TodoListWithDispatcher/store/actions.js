"use strict";
import { todoService } from "@/services";
import { INIT_TODO, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

// 获取TODO
function initTodos({ state, payload, response }) {
  return {
    todos: response,
  };
}

// 添加Todo
function addTodo({ state, payload, response }) {
  return {
    todos: state.todos.concat(payload),
    addCount: state.addCount + 1,
  };
}

// 删除 todo
function removeTodo({ state, payload, response }) {
  const { id } = payload;

  const todos = state.todos.filter((item) => item.id !== id);
  return {
    todos,
    removeCount: state.removeCount + 1,
  };
}

// 切换 todo 状态
function toggleTodo({ state, payload, response }) {
  const { id, completed } = payload;
  const todos = state.todos.map((item) => {
    item.id === id && (item.completed = completed);
    return item;
  });
  return {
    ...state,
    todos,
  };
}

const actions = {
  // [type]: [ asyncRequest, dispatchAction ]
  [INIT_TODO]: [todoService.getTodos, initTodos],
  [ADD_TODO]: [todoService.addTodo, addTodo],
  [REMOVE_TODO]: [todoService.removeTodo, removeTodo],
  [TOGGLE_TODO]: [todoService.toggleTodo, toggleTodo],
};

export default actions;
