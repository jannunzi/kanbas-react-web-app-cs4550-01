import { useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import Add from "./Add";
function PathParameters() {
  const { message } = useSelector((state) => state.helloReducer);
  return (
    <div>
      <h2>Path Parameters</h2>
      {message}
      <Link to="/Labs/a3/add/1/2">1 + 2</Link> <br />
      <Link to="/Labs/a3/add/3/4">3 + 4</Link>
      <Add />
      <Routes>
        <Route path="a3/add/:a/:b" element={<Add />} />
      </Routes>
    </div>
  );
}
export default PathParameters;
