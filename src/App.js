import logo from "./logo.svg";
import "./App.css";
import "./reset.css";
import { useState } from "react";

function App() {
  const courses = [
    {
      name: "HTML y CSS",
      color: "#2fa4ab",
      desc:
        "Aprendé a estructurar páginas web con HTML y desatá todo su potencial visual con CSS siguiendo los estándares de la industria",
      image:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/html-css.png",
    },
    {
      name: "Javascript",
      color: "#de9103",
      desc:
        "Aprendé a programar junto al lenguaje que domina el mundo del desarrollo web",
      image:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/javascript.png",
    },
    {
      name: "Terminal",
      color: "#712c7d",
      desc:
        "La terminal es una herramienta esencial para programar, en este curso aprendé sus conceptos básicos",
      image:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/terminal.png",
    },
    {
      name: "Git y Github",
      color: "#0f1d44",
      desc:
        "La herramienta principal para compartir código, en este curso te enseñamos todo lo que tenés que saber sobre crear y compartir repositorios",
      image:
        "https://courseit-statics.nyc3.digitaloceanspaces.com/icons/logos/git.png",
    },
  ];

  const [filteredCourses, setFilteredCourses] = useState(courses);

  function handleChange(e) {
    const { value } = e.target;

    if (value == "") {
      setFilteredCourses(courses);
    }

    const filtered = courses.filter((course) => {
      return course.name.toLowerCase().includes(value.toLowerCase());
    });

    setFilteredCourses(filtered);
  }

  return (
    <div className="App">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Ingrese el curso que desea buscar"
          className="input"
          onChange={handleChange}
        />
      </div>

      <div className="course-container">
        {filteredCourses.map((course, key) => (
          <div className="course" key={key}>
            <div className="imagen" style={{ backgroundColor: course.color }}>
              <img src={course.image} />
            </div>
            <div className="course-title">{course.name}</div>
            <div className="course-desc">{course.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
