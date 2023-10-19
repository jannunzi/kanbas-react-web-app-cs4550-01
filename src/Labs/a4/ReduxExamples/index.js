import React from "react";
import AddRedux from "./AddRedux";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import HelloRedux from "./HelloRedux";
import TodoList from "./todos/TodoList";

const ReduxExamples = () => {
  return (
    <div>
      <h2>Redux Examples</h2>
      <TodoList />
      <AddRedux />
      <Counter1 />
      <Counter2 />
      <HelloRedux />
    </div>
  );
};

export default ReduxExamples;
