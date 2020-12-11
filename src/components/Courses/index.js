import Course from "../Course";

function Courses(props) {
  const { visibleCourses } = props;
  return (
    <div className="course-container">
      {visibleCourses.map((course, key) => (
        <Course key={key} course={course} />
      ))}
    </div>
  );
}

export default Courses;
