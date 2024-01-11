import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/layout/layout.jsx";
import HomePage from "./components/home/homePage.jsx";
import About from "./components/about/about.jsx";
import Contact from "./components/contact/contact.jsx";
import Github from // ,{ githubInfoLoader }
"./components/github/github.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <HomePage />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         loader: { githubInfoLoader },
//         path: "github",
//         element: <Github />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />

      <Route
        // loader={githubInfoLoader}
        path="github"
        element={<Github />}
      />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
