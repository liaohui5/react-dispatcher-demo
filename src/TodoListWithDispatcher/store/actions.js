export default function getActions(state) {
  // 添加 TODO
  const addTodo = (todo) => {
    return {
      ...state,
      todos: [...state.todos, todo],
      addCount: state.addCount + 1,
    };
  };

  // 移除 TODO
  const removeTodo = (id) => {
    const todos = state.todos.filter((item) => item.id !== id);
    return {
      ...state,
      todos,
      removeCount: state.removeCount + 1,
    };
  };

  // 切换 TODO 完成状态
  const toggleTodo = ({ id, completed }) => {
    const todos = state.todos.map((item) => {
      item.id === id && (item.completed = completed);
      return item;
    });
    return {
      ...state,
      todos,
    };
  };

  return {
    addTodo,
    removeTodo,
    toggleTodo,
  };
}
