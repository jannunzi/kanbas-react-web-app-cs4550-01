function CourseNavigation(active) {
  const links = [
    { text: "Home", url: "/Kanbas/Courses/Home/screen.html" },
    { text: "Modules", url: "/Kanbas/Courses/Modules/screen.html" },
    { text: "Assignments", url: "/Kanbas/Courses/Assignments/screen.html" },
    { text: "Piazza", url: "/Kanbas/Courses/Piazza/screen.html" },
    { text: "Zoom", url: "#" },
    { text: "Grades", url: "/Kanbas/Courses/Grades/screen.html" },
  ];
  return `
<ul class="wd-course-navigation list-group">
  ${links
    .map(
      (link) => `
    <li class="list-group-item ${active === link.text ? "active" : ""}">
      <a href="${link.url}" class="wd-course-navigation-link ">${link.text}</a>
    </li>
  `
    )
    .join("")}
</ul>
`;
}

export default CourseNavigation;
