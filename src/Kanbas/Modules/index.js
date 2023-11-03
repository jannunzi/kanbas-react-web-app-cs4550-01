import ModuleList from "./ModuleList";
import "./index.css";
import { Routes, Route, Link } from "react-router-dom";
import ModuleForm from "./ModuleForm"
function Modules() {
  return (
    <div>
      <ModuleList/>
      <Routes>
        <Route path="ModuleForm" element={<ModuleForm />} />
      </Routes>
    </div>
  );
}

export default Modules;
