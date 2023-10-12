import JavaScript from "./JavaScript";
import PathParameters from "./PathParameters";
import TodoItem from "./todos/TodoItem";
import TodoList from "./todos/TodoList";

function Assignment3() {
  return (
    <div>
      <h1>Assignment 3</h1>
      <TodoList />
      <TodoItem
        todo={{
          done: true,
          title: "Make Dinner",
          status: "Done",
        }}
      />
      <TodoItem
        todo={{
          done: true,
          title: "pick up kids",
          status: "In Progress",
        }}
      />
      <PathParameters />
      <JavaScript />
    </div>
  );
}

export default Assignment3;
