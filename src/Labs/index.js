import { Routes, Route, Link, Navigate } from "react-router-dom";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import Assignment5 from "./a5";
import Nav from "../nav";
function Labs() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to="a3" />} />
        {/* <Route path="/" element={<Assignment3 />} /> */}
        <Route path="a3/*" element={<Assignment3 />} />
        <Route path="a4" element={<Assignment4 />} />
        <Route path="a5" element={<Assignment5 />} />
      </Routes>
      {/* <Assignment3 />
      <Assignment4 />
      <Assignment5 /> */}
    </div>
  );
}

export default Labs;
