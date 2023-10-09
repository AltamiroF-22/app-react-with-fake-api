import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import "./Navbar.css";
import Logo from "../../../assets/img/Logo.png";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <img src={Logo} alt="Logo" />
        </Link>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/company">Company</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
        <button onClick={() => toggleTheme()}> {theme} mode</button>
      </nav>
    </div>
  );
};

export default Navbar;
