import db from "../Database";
import "./index.css";
import { Link } from "react-router-dom";
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <div className="list-group">
        {courses.map((course, index) => (
          <Link
            key={index}
            to={`/Kanbas/Courses/${course._id}`}
            className="list-group-item"
          >
            {course.name}
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
