import React from "react";
import { useSelector } from "react-redux";

function FunctionDestructing() {
  const { todos } = useSelector((state) => state.todosReducer);

  const add = (a, b) => a + b;
  const sum = add(1, 2);
  const subtract = ({ b, a }) => a - b;
  const difference = subtract({ a: 4, b: 2, c: 234 });
  return (
    <div>
      <h2>Function Destructing</h2>
      {todos.map((todo) => (
        <div>{todo.title}</div>
      ))}
      const add = (a, b) =&gt; a + b;
      <br />
      const sum = add(1, 2);
      <br />
      const subtract = (&#123; a, b &#125;) =&gt; a - b;
      <br />
      const difference = subtract(&#123; a: 4, b: 2 &#125;);
      <br />
      sum = {sum}
      <br />
      difference = {difference}
    </div>
  );
}
export default FunctionDestructing;
