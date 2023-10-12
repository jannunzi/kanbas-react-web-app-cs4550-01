const TodoItem = ({ todo }) => {
  //   const todo = {
  //     done: done,
  //     title: title,
  //     status: status,
  //   };
  return (
    <li className="list-group-item">
      <input type="checkbox" defaultChecked={todo.done} />
      &nbsp;
      {todo.title}({todo.status})
    </li>
  );
};
export default TodoItem;
