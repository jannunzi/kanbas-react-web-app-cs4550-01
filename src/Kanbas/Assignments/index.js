import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );
  return (
    <div>
      <div className="assignment-header">
        <input type="text" placeholder="Search for Assignment" className="assignment-search" />
        <button className="assignment-button">+Group</button>
        <button className="assignment-button add-assignment-button">+Assignment</button>
        <button className="assignment-button">
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>
      </div>
      <hr/>
      <div className="list-group assignment-container">
        <div className="assignment-container-header">
          <span className="title">Assignments</span>
          <span className="arrow">▼</span>
          <span className="percentage">40% of total</span>
          <span className="plus">+</span>
          <span className="ellipsis">:</span>
        </div>

        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="assignment-item"
          >
            <div className="assignment-item-left">
              {assignment.title}
            </div>
            <div className="assignment-item-right">
              {/* You can add icons and due date here */}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
