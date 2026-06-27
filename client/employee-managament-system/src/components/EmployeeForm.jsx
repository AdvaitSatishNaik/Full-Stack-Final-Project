import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  addEmployee,
  updateEmployee,
} from "../slices/employeeSlice";

const EmployeeForm = ({ selectedEmployee, clearSelection }) => {
  const dispatch = useDispatch();

  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    department: "",
    salary: "",
    skills: "",
    userId: "",
  });

  useEffect(() => {
    if (selectedEmployee) {
      setEmployee({
        ...selectedEmployee,
        skills: selectedEmployee.skills.join(", "),
      });
    }
  }, [selectedEmployee]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employeeData = {
      ...employee,
      skills: employee.skills.split(",").map(skill => skill.trim()),
    };

    if (selectedEmployee) {
      dispatch(
        updateEmployee({
          id: selectedEmployee._id,
          employee: employeeData,
        })
      );

      clearSelection();
    } else {
      dispatch(addEmployee(employeeData));
    }

    setEmployee({
      name: "",
      age: "",
      department: "",
      salary: "",
      skills: "",
      userId: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
      }}
    >
      <input
        type="text"
        name="name"
        placeholder="👤 Employee Name"
        value={employee.name}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="number"
        name="age"
        placeholder="🎂 Age"
        value={employee.age}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="department"
        placeholder="🏢 Department"
        value={employee.department}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="number"
        name="salary"
        placeholder="💰 Salary"
        value={employee.salary}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="skills"
        placeholder="💻 React, Node, MongoDB"
        value={employee.skills}
        onChange={handleChange}
        style={inputStyle}
      />

      <input
        type="text"
        name="userId"
        placeholder="🆔 User ID"
        value={employee.userId}
        onChange={handleChange}
        style={inputStyle}
      />

      <button
        type="submit"
        style={{
          gridColumn: "span 2",
          background: selectedEmployee ? "#2563eb" : "#16a34a",
          color: "#fff",
          border: "none",
          padding: "15px",
          borderRadius: "10px",
          fontSize: "17px",
          fontWeight: "600",
          cursor: "pointer",
          transition: ".3s",
        }}
      >
        {selectedEmployee ? "✏️ Update Employee" : "➕ Add Employee"}
      </button>
    </form>
  );
};

const inputStyle = {
  padding: "15px",
  border: "1px solid #d1d5db",
  borderRadius: "10px",
  fontSize: "15px",
  outline: "none",
  background: "#fff",
};

export default EmployeeForm;