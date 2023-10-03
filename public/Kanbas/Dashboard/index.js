console.log("hello world");

document.write("<h2>hello world</h2>");

const courses = ["cs4550", "cs5610", "cs5200", "cs4560"];
document.write("<ul>");
for (let i = 0; i < courses.length; i++) {
  document.write("<li>" + courses[i] + "</li>");
}
document.write("</ul>");
