import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
function Dashboard({
  addCourse,
  deleteCourse,
  updateCourse,
  courses,
  course,
  setCourse,
  setCourses,
}) {
  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        value={course.name}
        onChange={(e) => {
          setCourse({ ...course, name: e.target.value });
        }}
      />
      <button onClick={() => updateCourse(course)}>Update</button>
      <button onClick={addCourse}>Add</button>
      <div className="list-group">
        {courses.map((course, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            {course.name}
            <button
              onClick={(e) => {
                e.preventDefault();
                deleteCourse(course);
              }}
            >
              Delete
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setCourse(course);
              }}
            >
              Edit
            </button>
          </Link>
        ))}
      </div>
      <pre>
        <code>{JSON.stringify(courses, null, 2)}</code>
      </pre>
    </div>
  );
}

export default Dashboard;
