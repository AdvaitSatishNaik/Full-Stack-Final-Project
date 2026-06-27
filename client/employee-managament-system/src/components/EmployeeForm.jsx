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
      skills: employee.skills.split(","),
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
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={employee.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Age"
        value={employee.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="department"
        placeholder="Department"
        value={employee.department}
        onChange={handleChange}
      />

      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={employee.salary}
        onChange={handleChange}
      />

      <input
        type="text"
        name="skills"
        placeholder="React,Node"
        value={employee.skills}
        onChange={handleChange}
      />

      <input
        type="text"
        name="userId"
        placeholder="User Id"
        value={employee.userId}
        onChange={handleChange}
      />

      <button type="submit">
        {selectedEmployee ? "Update Employee" : "Add Employee"}
      </button>

    </form>
  );
};

export default EmployeeForm;