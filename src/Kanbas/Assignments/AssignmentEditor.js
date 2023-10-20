import React from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
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
      <div className="assignment-editor-header">
        <div className="editor-controls">
          <span className="published-status">✔ Published</span>
          <button className="editor-ellipsis btn-secondary"><FontAwesomeIcon icon={faEllipsisV} /></button>
        </div>
        <hr/>
      </div>
      <h6>Assignment Name</h6>
      <input className="form-control assignment-input" defaultValue={assignment.title} />
      <div className="editor-actions">
        <Link className="btn btn-secondary" to={`/Kanbas/Courses/${courseId}/Assignments`}>
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-danger">
          Save
        </button>
      </div>
      <hr/>
    </div>
  );
}

export default AssignmentEditor;
