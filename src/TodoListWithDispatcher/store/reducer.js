import initState from "./state.js";
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./actionTypes";
import getActions from "./actions";
import { useReducer } from "react";

function reducer(state = initState, { type, payload }) {
  const action = getActions(state);

  if (type === ADD_TODO) {
    return action.addTodo(payload);
  }

  if (type === TOGGLE_TODO) {
    return action.toggleTodo(payload);
  }

  if (type === REMOVE_TODO) {
    return action.removeTodo(payload);
  }

  throw new TypeError("[TodoList reducer]: Unknown type " + type);
}

// eslint-disable-next-line
export default () => useReducer(reducer, initState);
