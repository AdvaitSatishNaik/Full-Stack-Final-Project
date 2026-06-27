import { useState } from "react";
import { useDispatch } from "react-redux";

import { addEmployee } from "../slices/employeeSlice";

const EmployeeForm = () => {

    const dispatch = useDispatch();

    const [employee, setEmployee] = useState({
        name: "",
        age: "",
        department: "",
        salary: "",
        skills: "",
        userId: ""
    });

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value,
        });

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch(
            addEmployee({
                ...employee,
                skills: employee.skills.split(","),
            })
        );

        setEmployee({
            name: "",
            age: "",
            department: "",
            salary: "",
            skills: "",
            userId: ""
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
                Add Employee
            </button>

        </form>

    );

};

export default EmployeeForm;