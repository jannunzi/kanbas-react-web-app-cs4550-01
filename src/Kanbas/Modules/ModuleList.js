import db from "../Database";
import { useParams } from "react-router";

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules.filter((module) => module.course === courseId);
  return (
    <div>
      <ul className="list-group">
        {modules.map((module, index) => (
          <li key={index} className="list-group-item">
            {module.name}
            {module.lessons && module.lessons.length > 0 && (
              <ul className="list-group">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item">
                    {lesson.name}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ModuleList;
