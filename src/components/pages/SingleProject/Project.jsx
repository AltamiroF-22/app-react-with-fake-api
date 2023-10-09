import "./Project.css";
import Loader from "../../loader/Loader";
import ProjectForm from "../../project/ProjectForm";
import Message from "../../Message/Message";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServiceForm from "../../service/ServiceForm ";
import ServiceCard from "../../service/serviceCard";

const Project = () => {
  const { id } = useParams();
  const [project, setProject] = useState([]);
  const [services, setServices] = useState([]);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [showServiceForm, setShowServiceForm] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://localhost:5000/projects/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setProject(data);
          setServices(data.services);
        })
        .catch((e) => console.log(e));
    }, 500);
  }, [id]);

  const editPost = (project) => {
    setMessage("");

    if (project.budget < project.cost) {
      setMessage("O valor não pode ser menor!");
      setType("error");
      return false;
    }

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        setProject(data);
        setShowProjectForm(false);
        setMessage("Dados atualizados com sucesso!");
        setType("success");
      })
      .catch((e) => console.log(e));
  };

  const createService = (project) => {
    setMessage("");

    const lastService = project.services[project.services.length - 1];

    lastService.id = uuidv4();

    const lastServiceCost = lastService.cost;
    const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

    if (newCost > parseFloat(project.budget)) {
      setMessage("Orçamento ultrapassado, verifique o valor do serviço");
      setType("error");

      project.services.pop();
      return false;
    }

    project.cost = newCost;

    fetch(`http://localhost:5000/projects/${project.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        setShowServiceForm(false);
        console.log(data);
      })
      .catch((error) => console.log(error));

    setMessage("Serviço adicionado com secesso ");
    setType("success");
  };

  const toggleProjectForm = () => {
    setShowProjectForm(!showProjectForm);
  };
  const toggleServiceForm = () => {
    setShowServiceForm(!showServiceForm);
  };

  const removeService = (id, cost) => {
    setMessage("");
    const servicesUpdated = project.services.filter(
      (service) => service.id !== id
    );

    const projectUpdated = project;

    projectUpdated.services = servicesUpdated;
    projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

    fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(projectUpdated),
    })
      .then((res) => res.json())
      .then(() => {
        setProject(projectUpdated);
        setServices(servicesUpdated);
        setMessage("Serviço atualizado com sucesso!");
      })
      .catch((error) => console.log(error));
  };

  return (
    <main>
      {project.name ? (
        <section className="project_details">
          <article className="container-edit">
            {message && <Message type={type} message={message} />}
            <div className="services_form_container">
              <h1>{project.name}</h1>
              <button onClick={toggleProjectForm}>
                {!showProjectForm ? "Editar projeto " : "Fechar projeto"}
              </button>
              {!showProjectForm ? (
                <div className="project_info">
                  <p>
                    <span>Categoria: </span>
                    {project.category ? project.category.name : ""}
                  </p>
                  <p>
                    <span>Total de Orçamento: </span>R${project.budget}
                  </p>
                  <p>
                    <span>Total Utilizado: </span>R${project.cost}
                  </p>
                </div>
              ) : (
                <div className="project_info">
                  <ProjectForm
                    handleSubmit={editPost}
                    btnTxt="Concluir Edição"
                    projectData={project}
                  />
                </div>
              )}
            </div>
            <div className="services_form_container">
              <h2>Adicione um serviço</h2>
              <button onClick={toggleServiceForm}>
                {!showServiceForm ? "Adicionar serviço " : "Fechar"}
              </button>
              <div className="project_info">
                {showServiceForm && (
                  <ServiceForm
                    handleSubmit={createService}
                    btnText="Adicionar serviço"
                    projectData={project}
                  />
                )}
              </div>
            </div>
            <h2>Serviços</h2>
            <div className="container-edit container-edit2">
              {services.length > 0 &&
                services.map((service) => (
                  <ServiceCard
                    id={service.id}
                    cost={service.cost}
                    name={service.name}
                    desc={service.description}
                    key={service.id}
                    handleRemove={removeService}
                  />
                ))}
              {services.length === 0 && <p>Não há nenhum serviço cadastrado</p>}
            </div>
          </article>
        </section>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default Project;
