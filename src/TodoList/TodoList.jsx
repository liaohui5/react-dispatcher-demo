import TodoItem from "./TodoItem";
export default function TodoList(props) {
  const { todos, addCount, removeCount } = props;
  return (
    <div>
      <p>
        添加了{addCount}个, 删除了{removeCount}个
      </p>
      <div>
        {todos.map((item) => (
          <TodoItem key={item.id} todo={item} />
        ))}
      </div>
    </div>
  );
}
