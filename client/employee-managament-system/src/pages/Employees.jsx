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

      <div className="employees-page">

        {/* Header */}

        <div className="page-header">
          <h1>Employee Management</h1>
        </div>

        {/* Form Card */}

        <div className="employee-form-card">

          <div className="form-title">
            {selectedEmployee ? "✏️ Update Employee" : "➕ Add New Employee"}
          </div>

          <EmployeeForm
            selectedEmployee={selectedEmployee}
            clearSelection={() => setSelectedEmployee(null)}
          />

        </div>

        {/* Table */}

        <div className="employee-table-card">

          <div className="table-title">
            Employee Directory
          </div>

          {loading ? (
            <div className="loading">
              Loading Employees...
            </div>
          ) : (
            <EmployeeTable
              employees={employees}
              onEdit={setSelectedEmployee}
            />
          )}

        </div>

      </div>
    </>
  );
};

export default Employees;