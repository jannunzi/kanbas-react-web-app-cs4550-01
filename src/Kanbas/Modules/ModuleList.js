import db from "../Database";
import { useParams } from "react-router";
import "./index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);

  return (
    <div className="modules-container">
<div className="modules-actions">
<button className="mybtn action-btn">Collapse All</button>
<button className="mybtn action-btn">View Progress</button>
<button className="mybtn action-btn dropdown-btn">Publish All ▼</button>
<button className="mybtn add-module-btn">+ Module</button>
<button className="mybtn action-btn">
   <FontAwesomeIcon icon={faEllipsisV} />
</button>


</div>
<hr className="modules-divider" />
<div>
      <ul className="module-list-group">
        {modules.map((module, index) => (
          <li key={index} className="module-list-group-item">
  <div className="module-content">
    <div className="module-header">
      <span className="module-icon">::</span> {module.name}
    </div>
    <div className="module-actions">
      <span className="checkmark">✔</span>
      <span className="plus">+</span>
      <span className="ellipsis">:</span>
    </div>
  </div>
  {module.lessons && module.lessons.length > 0 && (
    <ul className="lesson-list-group">
      {module.lessons.map((lesson, index) => (
        <li key={index} className="lesson-list-group-item">
          {lesson.name}
        </li>
      ))}
    </ul>
  )}
</li>
        ))}
      </ul>
    </div>
</div>
  );
}

export default ModuleList;
