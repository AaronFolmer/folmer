import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/globals.css";

import Home from "./__app";
import About from "./pages/about/page";
import Now from "./pages/now/page";
import Books from "./pages/topics/books/page";
import Hobbies from "./pages/topics/hobbies/page";
import Learning from "./pages/topics/learning/page";

const router = createBrowserRouter([
  {
    path: '/folmer/',
    element: <Home/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/now',
    element: <Now/>
  },
  {
    path: '/topics/books',
    element: <Books/>,
  },
  {
    path: '/topics/hobbies',
    element: <Hobbies/>,
  },
  {
    path: '/topics/learning',
    element: <Learning/>,
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
