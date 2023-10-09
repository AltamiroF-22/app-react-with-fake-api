/* eslint-disable react/prop-types */
import { useState } from "react";
import Input from "../form/input/Input";
import SubmitButton from "../form/submitButton/SubmitButton";
import Message from "../Message/Message";
import "../project/ProjectForm.css";

const ServiceForm = ({ handleSubmit, btnText, projectData }) => {
  const [service, setService] = useState({
    name: "",
    cost: 0,
    description: "",
  });
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  const submit = (e) => {
    setMessage("");
    setType("");
    
    e.preventDefault();
    projectData.services.push(service);

    // ----- funciona mas não 100% do jeito certo :) ------ //
    /* if (service.cost <= 0) {
       setMessage("O valor não poder ser 0 ou menor!");
       setType("error");
       return false;
     } */

    handleSubmit(projectData);
  };

  const handleChange = (e) => {
    setService({ ...service, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={submit} className="form">
      {message && <Message type={type} message={message} />}
      <Input
        type="text"
        text="Nome do Serviço"
        placeholder="Insira o nome do serviço"
        name="name"
        handleOnChange={handleChange}
      />
      <Input
        type="Number"
        text="Custo do Serviço"
        placeholder="Insira o valor total"
        name="cost"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição do Serviço"
        placeholder="Descreva o serviço"
        name="description"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
};

export default ServiceForm;
