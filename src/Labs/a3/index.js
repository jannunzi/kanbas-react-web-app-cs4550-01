import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";
import Add from "./Add";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput";
function Assignment3() {
  return (
    <div>
      
      <h1>Assignment 3</h1>
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
