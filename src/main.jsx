import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Home from "./routes/Home.jsx";
import Contact from "./routes/Contact.jsx";
import Company from "./routes/Company.jsx";
import Projects from "./routes/Projects.jsx";
import NewProject from "./routes/NewProject.jsx";
import Project from "./routes/Project.jsx";

//Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/company", element: <Company /> },
      { path: "/projects", element: <Projects /> },
      { path: "/newproject", element: <NewProject /> },
      { path: "/project/:id", element: <Project /> },
    ],
  },
]);

import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
