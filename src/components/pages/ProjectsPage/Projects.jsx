import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LinkButtonModule from "../../linkButtonModule/linkButtonModule";
import Message from "../../Message/Message";
import ProjectCard from "../../project/ProjectCard";
import Loading from "../../loader/Loader";
import "./Projects.css";

const Projects = () => {
  const location = useLocation();
  let message = "";

  if (location.state) {
    message = location.state.message;
  }

  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [projectMessage, setProjectsMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
          setRemoveLoading(true);
        })
        .catch((e) => console.log(e));
    }, 500);
  }, []);

  const removeProject = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
        setProjectsMessage("Projeto Removido com sucesso!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <section className="projects">
      <article className="title">
        <h1>Meus Projetos</h1>
        <LinkButtonModule text="Novo projeto" to="/newproject" />
      </article>

      {message && <Message type="success" message={message} />}
      {projectMessage && <Message type="success" message={projectMessage} />}

      <article className="container">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              id={project.id}
              budget={project.budget}
              category={project.category ? project.category.name : ""}
              handleremove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p> Não há projetos cadastrados :( </p>
        )}
      </article>
    </section>
  );
};

export default Projects;
