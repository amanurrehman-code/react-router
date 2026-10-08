import { Navigate } from "react-router-dom";

function RoleBasedRoute({ children, allowedRole }) {
  const userRole = "buyer";

  if (userRole !== allowedRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

export default RoleBasedRoute;