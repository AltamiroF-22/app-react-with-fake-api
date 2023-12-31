import { useNavigate } from "react-router-dom";

import ProjectForm from "../../project/ProjectForm";
import "./NewProjects.css";

const Projects = () => {
  const navigate = useNavigate();

  const createPost = (project) => {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/projects", {
          state: { message: "Projeto criado com sucesso!" },
        });
      })
      .catch((e) => console.log(`ERROR! ${e}`));
  };

  return (
    <div className="new-projects">
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar os serviços</p>
      <ProjectForm handleSubmit={createPost} btnTxt="Criar projeto" />
    </div>
  );
};

export default Projects;
