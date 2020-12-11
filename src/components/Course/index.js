function Course(props) {
  const { course } = props;
  return (
    <div className="course" key={props.key}>
      <div className="imagen" style={{ backgroundColor: course.color }}>
        <img src={course.image} />
      </div>
      <div className="course-title">{course.name}</div>
      <div className="course-desc">{course.desc}</div>
    </div>
  );
}

export default Course;
