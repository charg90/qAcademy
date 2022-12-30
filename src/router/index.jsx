import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layout/LayoutPublic";
import LayoutUserHome from "../Layout/LayoutUserHome";
import Home from "../Pages/Home/Home";
import UserHome from "../Pages/UserHome/UserHome";
import LoginRegistration from "../Pages/LoginRegistration/LoginRegistration";
import ProtectedRoutes from "./../Components/Protected Routes/ProtectedRoute";
import Admin from "../Components/Admin/Admin";
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
  {
    path: "/userHome",
    element: (
      <ProtectedRoutes>
        <LayoutUserHome />
      </ProtectedRoutes>
    ),
    children: [
      {
        index: true,
        element: <UserHome />,
      },

      {
        path: "admin",
        element: <Admin />,
      },
    ],
  },
]);
