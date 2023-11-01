import React, { useState } from "react";
function Counter() {
  let [count, setCount] = useState(7);
  console.log(count);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          //   count++;
          increment();
          console.log(count);
        }}
      >
        Up
      </button>
      <button
        onClick={() => {
          //   count--;
          decrement();
          console.log(count);
        }}
      >
        Down
      </button>
      <h1>Counter: {count}</h1>
    </div>
  );
}
export default Counter;
