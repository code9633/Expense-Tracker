import { createContext, useState } from "react";
import "./App.css";
import Home from "./Pages/HomePage/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import Error from "./Pages/Error/Error";
import Signup from "./Pages/LoginSignup/Signup";
import Login from "./Pages/LoginSignup/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/signup",
        element: <Signup />,
        errorElement: <Error />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        errorElement: <Error />,
      },
    ],
  },
  
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
