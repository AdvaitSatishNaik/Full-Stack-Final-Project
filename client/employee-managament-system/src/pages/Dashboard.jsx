import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState({
    totalEmployees: 0,
    totalProjects: 0,
    totalBudget: 0,
  });

  useEffect(() => {
    fetchDashboard();
  }, []);

  const fetchDashboard = async () => {
    try {
      const res = await API.get("/report/dashboard");

      setDashboard({
        totalEmployees: res.data.totalEmployees,
        totalProjects: res.data.totalProjects,
        totalBudget: res.data.totalBudget,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Dashboard</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              width: "220px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>Total Employees</h3>
            <h1>{dashboard.totalEmployees}</h1>
          </div>

          <div
            style={{
              width: "220px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>Total Projects</h3>
            <h1>{dashboard.totalProjects}</h1>
          </div>

          <div
            style={{
              width: "220px",
              padding: "20px",
              border: "1px solid #ddd",
              borderRadius: "10px",
            }}
          >
            <h3>Total Budget</h3>
            <h1>₹ {dashboard.totalBudget}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;