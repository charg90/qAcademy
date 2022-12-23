import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layout/LayoutPublic";
import Home from "../Pages/Home/Home";
import LoginRegistration from "../Pages/LoginRegistration/LoginRegistration";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/cuentas",
    element: <LoginRegistration />,
  },
]);
