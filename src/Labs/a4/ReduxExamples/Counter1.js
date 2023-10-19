import { useState } from "react";
import Counter2 from "./Counter2";
import { useSelector, useDispatch } from "react-redux";
import { setCount1 } from "./counter1Reducer";

function Counter1() {
  //   const [count1, setCount1] = useState(0);
  const { count1 } = useSelector((state) => state.counter1Reducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter1: {count1}</h1>
      <button onClick={() => dispatch(setCount1(count1 + 1))}>Increment</button>
      <button onClick={() => dispatch(setCount1(count1 - 1))}>Decrement</button>
    </div>
  );
}

export default Counter1;
