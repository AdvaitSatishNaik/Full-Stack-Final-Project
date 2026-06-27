import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        Employee Management
      </div>

      <div className="nav-links">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/employees">Employees</Link>

        <button onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navbar;