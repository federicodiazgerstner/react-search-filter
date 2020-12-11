import logo from "./logo.svg";
import "./App.css";
import "./reset.css";
import Search from "./components/Search";
import Courses from "./components/Courses";
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

  function handleChange(inputValue) {
    if (inputValue == "") {
      setFilteredCourses(courses);
    }

    const filtered = courses.filter((course) => {
      return course.name.toLowerCase().includes(inputValue.toLowerCase());
    });

    setFilteredCourses(filtered);
  }

  return (
    <div className="App">
      <Search handleCallback={handleChange} />
      <Courses visibleCourses={filteredCourses} />
    </div>
  );
}

export default App;
