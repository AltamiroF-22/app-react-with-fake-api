import { Link } from "react-router-dom";

import "./linkButtonModule.css";

const linkButtonModule = ({ to, text }) => {
  return (
    <Link className="btn-module" to={to}>
      {text}
    </Link>
  );
};

export default linkButtonModule;
