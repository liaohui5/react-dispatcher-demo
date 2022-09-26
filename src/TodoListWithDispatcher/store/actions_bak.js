"use strict";
import { INIT_TODO, ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actionTypes";

const actions = Object.create(null);

// 初始化 TODO
actions[INIT_TODO] = (state, payload) => {
  return {
    todos: payload,
  };
};

// 添加 TODO
actions[ADD_TODO] = (state, payload) => {
  return {
    todos: state.todos.concat(payload),
    addCount: state.addCount + 1,
  };
};

// 删除 TODO
actions[REMOVE_TODO] = (state, { id }) => {
  const todos = state.todos.filter((item) => item.id !== id);
  return {
    todos,
    removeCount: state.removeCount + 1,
  };
};

// 切换 TODO 完成状态
actions[TOGGLE_TODO] = (state, { id, completed }) => {
  const todos = state.todos.map((item) => {
    item.id === id && (item.completed = completed);
    return item;
  });
  return {
    ...state,
    todos,
  };
};

export default actions;
