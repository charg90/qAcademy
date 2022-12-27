import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = () => {
  const auth = useSelector((state) => state.auth.accessToken);

  if (auth === null) {
    return <Navigate to={"/cuentas"} replace />;
  } else {
    <Outlet />;
  }
};

export default ProtectedRoutes;
