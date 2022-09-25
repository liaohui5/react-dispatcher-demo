"use strict";
import { http } from "@/shared";

export default {
  getTodos() {
    return http.get("/get_todos");
  },

  addTodo(data) {
    return http.post("/add_todo", data);
  },

  toggleTodo(data) {
    return http.post("/toggle_todo", data);
  },

  removeTodo(data) {
    return http.post("/remove_todo", data);
  },
};
