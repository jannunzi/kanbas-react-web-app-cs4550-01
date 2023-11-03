import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addModule, setModule } from "./modulesReducer";
import { Link } from "react-router-dom";

function ModuleForm() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const module = useSelector((state) => state.modulesReducer.module);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addModule({ ...module, course: courseId }));
  };

  return (
    <div className="module-form-container">
      <h2>Add Module</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Module Name:</label>
          <input 
            value={module.name}
            onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={module.description}
            onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <Link to="/">Back to Modules</Link>
    </div>
  );
}

export default ModuleForm;

