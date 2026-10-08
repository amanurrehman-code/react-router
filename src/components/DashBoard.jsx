import { Outlet, useLocation } from "react-router-dom";
function DashBoard() {
  const location = useLocation();

  return (
    <>
      <h1>Dashboard</h1>
      <p>Current Path: {location.pathname}</p>

      <Outlet />
    </>
  );
}
export default DashBoard