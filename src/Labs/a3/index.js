import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Add from "./Add";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
import { useSelector } from "react-redux";
function Assignment3() {
  const { todos } = useSelector((state) => state.todosReducer);
  return (
    <div>
      
      <h1>Assignment 3</h1>
      <ul className="list-group">
        {todos.map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <JavaScript />
      <PathParameters />
      <Classes/>
      <Styles/>
      <ConditionalOutput/>
      <TodoList />
    </div>
  );
}

export default Assignment3;
