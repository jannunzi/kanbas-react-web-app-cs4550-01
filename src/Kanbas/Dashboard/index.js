import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";

function Dashboard() {
  const courses = db.courses;

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="courses-header">
        Published Courses ({courses.length})
      </div>
      <div className="courses-container d-flex flex-wrap">
        {courses.map((course, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${course._id}`}
            className="course-card"
          >
            <div className="course-image"> {/* Image Placeholder */}
              <image></image>
            </div>
            <div className="course-title">{course.number} {course.name}</div>
            <div className="course-details">{course.number}.{course.startDate.replace(/-/g, '')}.{course.endDate.replace(/-/g, '')}</div>
            <div className="course-semester">{course.startDate.split('-')[0]} {parseInt(course.startDate.split('-')[1]) <= 5 ? 'Spring' : 'Fall'} Semester Full Term</div>
            {/* Add your course icon here */}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
