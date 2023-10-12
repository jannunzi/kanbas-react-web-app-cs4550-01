import React from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find((a) => a._id === assignmentId);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually save the assignment TBD");
    // go back to assignments
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h1>Assignment Editor!!! {assignment.title}</h1>
      <input className="form-control" defaultValue={assignment.title} />
      <button onClick={handleSave} className="btn btn-success">
        Save
      </button>
      <Link
        className="btn btn-warning"
        to={`/Kanbas/Courses/${courseId}/Assignments`}
      >
        Cancel
      </Link>
      <button className="btn btn-danger">Delete</button>
    </div>
  );
}

export default AssignmentEditor;
