import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../Layout/LayoutPublic";
import Home from "../Pages/Home/Home";
import UserHome from "../Pages/UserHome/UserHome";
import LoginRegistration from "../Pages/LoginRegistration/LoginRegistration";
import ProtectedRoutes from "../Components/Protected Routes/protectedRoute";
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
        <UserHome />,
      </ProtectedRoutes>
    ),
  },
]);
