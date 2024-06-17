import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  RouteObject,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/About/AboutUs";
import Services from "./Pages/ServicePage/Service";
import Portfolio from "./Pages/Portfolio/Portfolio";
import ContactUs from "./Pages/Contact/Contact";
import ProjectDetail from "./Pages/Portfolio/Details/ProjectDetail";
import Error from "./Pages/Error"; // Ensure this is a valid component
import Navbar from "./Components/Header/Navbar/Navbar"; // Import Navbar
import './Styles/App.css'

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <div className="everything">
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact">
          <ContactUs />
        </div>
      </div>
    ),
    errorElement: <Error />,
  },
  {
    path: "/portfolio",
    element: <Portfolio />,
    errorElement: <Error />,
  },
  {
    path: "/portfolio/:projectId",
    element: <ProjectDetail />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <Error />, // Catch-all route for undefined paths
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
