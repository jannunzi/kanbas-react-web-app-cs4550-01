import CourseNavigation from "../CourseNavigation/CourseNavigation.js";

function Home() {
  return `
    <div class="wd-flex-row-container">
      <div class="bg-color-yellow">
        <ul class="wd-kanbas-navigator">
          <li>
            <a href="/Kanbas/Account/Profile/screen.html">Account</a>
          </li>
          <li>
            <a href="/Kanbas/Dashboard/screen.html">Dashboard</a>
          </li>
          <li>
            <a href="/Kanbas/Courses/Home/screen.html">Courses</a>
          </li>
          <li>
            <a href="#">
              <i class="fa-regular fa-calendar"></i>
              Calendar</a
            >
          </li>
        </ul>
      </div>
      <div class="bg-color-blue">
        ${CourseNavigation("Home")}
      </div>
      <div class="bg-color-red wd-flex-grow-1">
        <ul>
          <li>
            Week 0
            <ul>
              <li>
                LEARNING OBJECTIVES
                <ul>
                  <li>Intro</li>
                  <li>Assignments</li>
                  <li>Topics</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>Week 1</li>
          <li>Week 2</li>
        </ul>
      </div>
      <div class="bg-color-blue">Status</div>
    </div>
`;
}

export default Home;
