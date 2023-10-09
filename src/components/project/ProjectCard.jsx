/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

const ProjectCard = ({ id, name, budget, category, handleremove }) => {
  const remove = (e) => {
    e.preventDefault;
    handleremove(id);
  };

  return (
    <section className="project_card">
      <h4>{name}</h4>
      <p>
        <span>Orçamento: </span> R${budget}
      </p>
      <p className="category_text">
        <span className={`${category.toLowerCase()}`}></span> {category}
      </p>
      <div className="project_card_actions">
        <Link to={`/project/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Remover
        </button>
      </div>
    </section>
  );
};

export default ProjectCard;
