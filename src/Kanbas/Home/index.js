import React from 'react';
import ModuleList from "../Modules/ModuleList";
import CourseStatus from "../CourseStatus";

function Home() {
  return (
    <div className="row">
      <div className="col-auto">
        <ModuleList />
      </div>
      <div className="col-auto">
        <CourseStatus />
      </div>
    </div>
  );
}

export default Home;
