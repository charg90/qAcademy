import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoutes = ({ children }) => {
  const auth = useSelector((state) => state.auth.accessToken);

  if (auth === null) {
    return <Navigate to={"/cuentas"} replace />;
  }
  return children;
};

export default ProtectedRoutes;
