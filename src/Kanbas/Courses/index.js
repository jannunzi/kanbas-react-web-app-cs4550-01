import { useParams } from "react-router";
import CourseNavigation from "../CourseNavigation";
import db from "../Database";
import { Routes, Route } from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import * as service from "../service";
import { useState, useEffect } from "react";

function Courses() {
  const { courseId } = useParams();
  // const course = db.courses.find((course) => course._id === courseId);
  // const course = courses.find((course) => course._id === courseId);
  const [course, setCourse] = useState({
    name: "New Course",
  });
  const fetchCourseById = async (courseId) => {
    const course = await service.fetchCourseById(courseId);
    setCourse(course);
  };

  useEffect(() => {
    fetchCourseById(courseId);
  }, [courseId]);

  return (
    <div>
      {course && (
        <>
          <h1>Courses {course.name}</h1>
          <div className="row">
            <div className="col">
              <CourseNavigation />
            </div>
            <div className="col">
              <Routes>
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route
                  path="Assignments/:assignmentId"
                  element={<AssignmentEditor />}
                />
                <Route path="Grades" element={<h1>Grades</h1>} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Courses;
