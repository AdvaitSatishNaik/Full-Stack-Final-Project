import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav
      style={{
        background: "#1e293b",
        color: "white",
        padding: "15px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h2>Employee Management System</h2>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Link
          to="/dashboard"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Dashboard
        </Link>

        <Link
          to="/employees"
          style={{
            color: "white",
            textDecoration: "none",
          }}
        >
          Employees
        </Link>

        <button
          onClick={logout}
          style={{
            padding: "8px 15px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;