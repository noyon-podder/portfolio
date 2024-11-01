import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from "./pages/Portfolio/Portfolio.jsx";
import Blogs from "./pages/Blogs/Blogs.jsx";
import Resume from "./pages/Resume/Resume.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import ProjectDetails from "./pages/Portfolio/ProjectDetails.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BlogDetails from "./pages/Blogs/BlogDetails.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/portfolio/:portfolioId",
        element: <ProjectDetails />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "/blogs/:blogId",
        element: <BlogDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
