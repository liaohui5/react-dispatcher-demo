"use strict";
import { useReducer } from "react";

export default function (initState, actions) {
  function taskReducer(state, { type, payload }) {
    const task = actions[type];
    if (typeof task !== "function") {
      console.info("[useTaskReducer] unknown action type " + type);
      return {};
    }
    return Object.assign({}, state, task(state, payload));
  }

  const [state, dispatchAction] = useReducer(taskReducer, initState);
  const dispatch = (type, payload) => dispatchAction({ type, payload });
  return [state, dispatch];
}
