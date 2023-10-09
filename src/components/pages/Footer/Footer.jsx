import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://www.instagram.com/junior.rx22/" target="blank">
            <FaInstagram size={25} />
          </a>
        </li>
        <li>
          <a href="https://github.com/AltamiroF-22" target="blank">
            <FaGithub size={25} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin size={25} />
          </a>
        </li>
      </ul>
      <p>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
