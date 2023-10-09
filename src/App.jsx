import { Outlet } from "react-router-dom";
import "./App.css";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
// components
import Navbar from "./components/pages/Navbar/Navbar";
import Footer from "./components/pages/Footer/Footer";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
