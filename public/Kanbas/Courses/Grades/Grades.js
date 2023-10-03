import CourseNavigation from "../CourseNavigation/CourseNavigation.js";

function Grades() {
  return `
  <table border="1" width="100%">
  <tr>
    <td valign="top">
      <ul>
        <li>
          <a href="#">Northeastern</a>
        </li>
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
          <a href="#">Inbox</a>
        </li>
      </ul>
    </td>
    <td valign="top">
      <!-- <link rel="stylesheet" href="/styles.css" /> -->
      ${CourseNavigation("Grades")}
    </td>
    <td valign="top">
      <h3>Student Names</h3>
      <input
        type="text"
        placeholder="joe, jane"
        title="Type the usernames of students you want to filter"
      />
      <h3>Assignment Names</h3>
      <input type="text" />
      <br />
      <br />
      <table width="100%" border="1">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>A1 - HTML</th>
            <th>A2 - CSS</th>
            <th>A3 - JS</th>
            <th>A4 - PHP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Jane Doe</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>John Smith</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </td>
  </tr>
</table>
    `;
}

export default Grades;
