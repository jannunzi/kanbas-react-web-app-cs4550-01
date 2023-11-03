import React, { useState } from "react";
import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse } ) {


  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="courses-header">
        Published Courses ({courses.length})
      </div>
      <h5>Course Form</h5>
      <input
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        className="form-control"
        placeholder="Course Name"
      />
      <input
        value={course.number}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        className="form-control"
        placeholder="Course Number"
      />
      <input
        value={course.startDate}
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        className="form-control"
        type="date"
      />
      <input
        value={course.endDate}
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        className="form-control"
        type="date"
      />
      <button onClick={addNewCourse}>Add</button>
      <button onClick={updateCourse}>Update</button>
      
      <div className="courses-container d-flex flex-wrap">
        {courses.map((course) => (
          <div key={course._id} className="course-card">
            <Link to={`/Kanbas/Courses/${course._id}`}>
              <div className="course-image">
                <image></image>
              </div>
              <div className="course-title">{course.number} {course.name}</div>
              <div className="course-details">{course.number}.{course.startDate.replace(/-/g, '')}.{course.endDate.replace(/-/g, '')}</div>
              <div className="course-semester">{course.startDate.split('-')[0]} {parseInt(course.startDate.split('-')[1]) <= 5 ? 'Spring' : 'Fall'} Semester Full Term</div>
            </Link>
            <button onClick={() => setCourse(course)}>Edit</button>
            <button onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
