import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

import { fetchEmployees } from "../slices/employeeSlice";
import "./Employees.css";

const Employees = () => {
  const dispatch = useDispatch();

  const { employees, loading } = useSelector(
    (state) => state.employee
  );

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Employee Management</h1>

        <EmployeeForm
          selectedEmployee={selectedEmployee}
          clearSelection={() => setSelectedEmployee(null)}
        />

        <br />

        {loading ? (
          <h2>Loading...</h2>
        ) : (
          <EmployeeTable
            employees={employees}
            onEdit={setSelectedEmployee}
          />
        )}
      </div>
    </>
  );
};

export default Employees;