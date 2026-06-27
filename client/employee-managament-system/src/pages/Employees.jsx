import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeTable from "../components/EmployeeTable";

import { fetchEmployees } from "../slices/employeeSlice";

const Employees = () => {

    const dispatch = useDispatch();

    const { employees, loading } = useSelector(
        (state) => state.employee
    );

    useEffect(() => {

        dispatch(fetchEmployees());

    }, [dispatch]);

    return (

        <>

            <Navbar />

            <div style={{ padding: "30px" }}>

                <h1>Employee Management</h1>

                <EmployeeForm />

                <br />

                {loading ? (
                    <h2>Loading...</h2>
                ) : (
                    <EmployeeTable employees={employees} />
                )}

            </div>

        </>

    );

};

export default Employees;