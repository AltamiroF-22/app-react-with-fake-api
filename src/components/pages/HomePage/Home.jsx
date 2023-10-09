import LinkButton from "../../linkButtonModule/linkButtonModule";
import "./Home.css";
import PigSaveCash from "../../../assets/img/pig-save-cash.png";

const Home = () => {
  return (
    <section className="Home">
      <h1>
        Bem-vindo ao <span>Cost</span>
      </h1>
      <p>Comece a gerenciar os seus projetos agora mesmo</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={PigSaveCash} alt="pig image" />
    </section>
  );
};

export default Home;
