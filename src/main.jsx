import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./MainLayout/MainLayout";
import Login from "./MainPage/Login/Login";
import Home from "./MainPage/Home/Home";
import Register from "./MainPage/Resgister/Register";
import Banner from "./MainPage/Home/Banner/Banner";
import UserSection from "./MainPage/Home/UseSection/UserSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'Register',
        element: <Register></Register>
      },
     
    ]
  },
  {
    path:'user',
    element: <UserSection></UserSection>
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);