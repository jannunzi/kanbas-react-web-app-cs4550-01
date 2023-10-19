import { setTodo, addTodo, updateTodo } from "./todosReducer";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
function TodoForm() {
  // { todo, setTodo, addTodo, updateTodo }
  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <button onClick={() => dispatch(addTodo(todo))}>Add</button>
      <button onClick={() => dispatch(updateTodo(todo))}>Update </button>
      <input
        value={todo.title}
        onChange={(e) =>
          dispatch(
            setTodo({
              ...todo,
              title: e.target.value,
            })
          )
        }
      />
      {todo.id}
    </li>
  );
}

export default TodoForm;
