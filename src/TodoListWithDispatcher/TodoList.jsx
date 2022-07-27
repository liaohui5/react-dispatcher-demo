import TodoItem from "./TodoItem";

export default function (props) {
  const { todos, addCount, removeCount } = props;

  return (
    <>
      <p>
        添加了 {addCount} 条, 删除了 {removeCount} 条
      </p>
      <div>
        {todos.map((item) => (
          <TodoItem todo={item} key={item.id} />
        ))}
      </div>
    </>
  );
}
