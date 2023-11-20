import Kanbas from "./Kanbas";
import Labs from "./Labs";
import HelloWorld from "./Labs/a3/HelloWorld";
import logo from "./logo.svg";
// import "./App.css";
import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Project from "./project";

function App() {
  const screen = "labs";
  return (
    <HashRouter>
      <div>
        {/* <div className="list-group">
          <Link className="list-group-item" to="/Labs">
            Labs
          </Link>
          <Link className="list-group-item" to="/hello">
            Hello
          </Link>
          <Link className="list-group-item" to="/kanbas">
            Kanbas
          </Link>
        </div> */}
        <Routes>
          <Route path="/" element={<Navigate to="/project" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/project/*" element={<Project />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
