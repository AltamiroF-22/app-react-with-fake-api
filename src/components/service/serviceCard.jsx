import "../project/ProjectCard.css";
import "./Service.css";
import { BsFillTrashFill } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ id, name, cost, desc, handleRemove }) => {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id, cost);
  };

  return (
    <article className="service_card">
      <section className="project_card">
        <h4>{name}</h4>
        <p>
          <span>Custo Total: </span> R${cost}
        </p>
        <small>{desc}</small>
        <div className="project_card_actions">
          <button onClick={remove}>
            <BsFillTrashFill /> Excluir
          </button>
        </div>
      </section>
    </article>
  );
};

export default ServiceCard;
