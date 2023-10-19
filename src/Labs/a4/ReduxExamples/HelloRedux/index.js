import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

function HelloRedux() {
  //   const [message, setMessage] = useState("Hello World");
  const { message } = useSelector((state) => state.helloReducer);

  return (
    <div>
      <h2>{message}</h2>
      {/* <button onClick={() => setMessage("Hello Redux")}>Change Message</button> */}
    </div>
  );
}

export default HelloRedux;
