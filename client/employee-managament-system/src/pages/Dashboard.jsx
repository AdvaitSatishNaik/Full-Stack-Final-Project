import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import "./Dashboard.css";

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

      <div className="dashboard">
        <h1>Dashboard</h1>

        <div className="cards">
          <div className="card">
            <h3>Total Employees</h3>
            <h1 className="card-value">
              {dashboard.totalEmployees}
            </h1>
          </div>

          <div className="card">
            <h3>Total Projects</h3>
            <h1 className="card-value">
              {dashboard.totalProjects}
            </h1>
          </div>

          <div className="card">
            <h3>Total Budget</h3>

            <h1 className="card-value">
              <span className="currency">₹</span>
              {dashboard.totalBudget.toLocaleString("en-IN")}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;