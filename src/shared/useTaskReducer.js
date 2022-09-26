"use strict";
import { onResolve, onReject } from "./taskReducerMiddleware";
import { useReducer } from "react";

export default function (initState, actions) {
  function taskReducer(state, { type, payload, response }) {
    const [_, task] = actions[type];
    if (typeof task !== "function") {
      console.info("[useTaskReducer] unknown action type " + type);
      return {};
    }
    return Object.assign({}, state, task({ state, payload, response }));
  }
  const [state, dispatchAction] = useReducer(taskReducer, initState);
  const dispatch = (type, payload) => {
    // 在这里统一处理异步请求(需要 action 特殊的数据结构)
    const [asyncRequest] = actions[type];
    if (typeof asyncRequest === "function") {
      // 如果需要异步请求
      return asyncRequest(payload)
        .then(onResolve)
        .then((response) => dispatchAction({ type, payload, response }))
        .catch(onReject);
    } else {
      // 如果不需要异步请求
      return dispatchAction({ type, payload, response: null });
    }
  };
  return [state, dispatch];
}
