import { useDispatch } from "react-redux";
import { deleteEmployee } from "../slices/employeeSlice";

const EmployeeTable = ({ employees, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (confirmDelete) {
      dispatch(deleteEmployee(id));
    }
  };

  return (
    <table
      border="1"
      cellPadding="10"
      style={{
        width: "100%",
        marginTop: "20px",
        borderCollapse: "collapse",
      }}
    >
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Skills</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{employee.department}</td>
            <td>{employee.salary}</td>
            <td>{employee.skills.join(", ")}</td>

            <td>
              <button onClick={() => onEdit(employee)}>
                Edit
              </button>

              <button
                style={{ marginLeft: "10px" }}
                onClick={() => handleDelete(employee._id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;