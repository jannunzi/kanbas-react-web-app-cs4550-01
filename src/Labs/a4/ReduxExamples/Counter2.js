import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCount2 } from "./counter2Reducer";

function Counter2() {
  // const [count2, setCount2] = useState(0);
  const { count2 } = useSelector((state) => state.counter2Reducer);
  const { count1 } = useSelector((state) => state.counter1Reducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter2: {count2}</h1>
      <h3>Counter1: {count1}</h3>
      <button onClick={() => dispatch(setCount2(count2 + 1))}>Increment</button>
      <button onClick={() => dispatch(setCount2(count2 - 1))}>Decrement</button>
    </div>
  );
}

export default Counter2;
