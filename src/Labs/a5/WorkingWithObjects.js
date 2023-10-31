import React, { useState } from "react";
function WorkingWithObjects() {
  const URL = "http://localhost:4000/a5/assignment";
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <a
        href={`${URL}/title/${assignment.title}`}
        className="btn btn-primary me-2 float-end"
      >
        Update Title
      </a>

      <input
        className="form-control mb-2 w-75"
        type="text"
        value={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />

      <h4>Retrieving Properties</h4>
      <a
        href="http://localhost:4000/a5/assignment/title"
        className="btn btn-primary me-2"
      >
        Get Title
      </a>

      <h4>Retrieving Objects</h4>
      <a
        href="http://localhost:4000/a5/assignment"
        className="btn btn-primary me-2"
      >
        Get Assignment
      </a>
    </div>
  );
}
export default WorkingWithObjects;
