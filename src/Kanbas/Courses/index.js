import { useParams, useLocation, Link } from "react-router-dom";
import CourseNavigation from "../CourseNavigation";
import db from "../Database";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "../Modules";
import Home from "../Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/AssignmentEditor";
import "./index.css";

function Courses() {
  const { courseId } = useParams();
  const location = useLocation();
  const course = db.courses.find((course) => course._id === courseId);

  function getBreadcrumbs() {
    const paths = location.pathname.split('/').filter(Boolean);
    let breadcrumbs = [{ label: course.name, path: `/Kanbas/Courses/${courseId}` }];
    
    if (paths.includes("Modules")) {
      breadcrumbs.push({ label: "Modules", path: `/Kanbas/Courses/${courseId}/Modules` });
    }
    if (paths.includes("Assignments")) {
      breadcrumbs.push({ label: "Assignments", path: `/Kanbas/Courses/${courseId}/Assignments` });
    }
    if (paths.includes("Home")) {
      breadcrumbs.push({ label: "Home", path: `/Kanbas/Courses/${courseId}/Home` });
    }

    return breadcrumbs;
  }

  return (
    <div className="course-container">
      <div className="course-header">
        <div className="hamburger-menu">☰</div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {getBreadcrumbs().map((breadcrumb, index) => (
              <li key={index} className={`breadcrumb-item ${index === getBreadcrumbs().length - 1 ? 'active' : ''}`}>
                <Link to={breadcrumb.path}>{breadcrumb.label}</Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <hr className="course-divider" />
      <div className="row">
        <div className="col-auto">
          <CourseNavigation />
        </div>
        <div className="col-auto">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="/" element={<Navigate to="Home" />}  />
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
    </div>
  );
}

export default Courses;
