import { lazy, Suspense } from "react";
import { createHashRouter } from "react-router-dom";
import LayoutPublic from "../Layout/LayoutPublic";
import LayoutUserHome from "../Layout/LayoutUserHome";
import Home from "../Pages/Home/Home";
import ProtectedRoutes from "./../Components/Protected Routes/ProtectedRoute";
import Spinners from "../Components/Commons/Spinner/Spinners";
import MisCursos from "../Components/MisCursos/MisCursos";
import Trader from "../Components/Trader/Trader";

const LoginRegistration = lazy(() =>
  import("../Pages/LoginRegistration/LoginRegistration")
);
const UserHome = lazy(() => import("../Pages/UserHome/UserHome"));
const Admin = lazy(() => import("../Components/Admin/Admin"));
export const router = createHashRouter([
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
    element: (
      <Suspense fallback={<Spinners />}>
        <LoginRegistration />,
      </Suspense>
    ),
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
        element: (
          <Suspense fallback={<Spinners />}>
            <UserHome />,
          </Suspense>
        ),
      },

      {
        path: "admin",
        element: (
          <Suspense fallback={<Spinners />}>
            <Admin />,
          </Suspense>
        ),
      },
      {
        path: "misCursos",
        element: (
          <Suspense fallback={<Spinners />}>
            <MisCursos />
          </Suspense>
        ),
        children: [{ path: "inversorBursatil" }, { path: "Combo" }],
      },
      { path: "trader", element: <Trader /> },
    ],
  },
]);
