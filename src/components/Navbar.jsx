import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        About
      </NavLink>
    </>
  );
}

export default Navbar;