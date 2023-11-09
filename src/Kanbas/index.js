import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useState, useEffect } from "react";
import store from "./store";
import { Provider } from "react-redux";
import * as service from "./service";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "New Course",
    number: "New Course Number",
    startDate: new Date(),
    endDate: new Date(),
  });

  const init = async () => {
    const courses = await service.fetchCourses();
    setCourses(courses);
  };

  useEffect(() => {
    init();
  }, []);

  const addCourse = async () => {
    try {
      const newCourse = await service.addCourse(course);
      setCourses([newCourse, ...courses]);
      // setCourses([
      //   { ...course, _id: new Date().getTime().toString() },
      //   ...courses,
      // ]);
      setCourse({ name: "" });
    } catch (error) {
      console.log(error);
    }
  };
  const deleteCourse = async (course) => {
    try {
      await service.deleteCourse(course);
      setCourses(courses.filter((c) => c._id !== course._id));
    } catch (error) {
      console.log(error);
    }
  };
  const updateCourse = async (course) => {
    try {
      await service.updateCourse(course);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          }
          return c;
        })
      );
      setCourse({ name: "" });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  setCourses={setCourses}
                  course={course}
                  setCourse={setCourse}
                  addCourse={addCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route path="Courses/:courseId/*" element={<Courses />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
