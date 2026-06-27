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
      style={{
        width: "100%",
        marginTop: "30px",
        borderCollapse: "collapse",
        background: "#fff",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 10px 25px rgba(0,0,0,.08)",
      }}
    >
      <thead>
        <tr
          style={{
            background: "#1e293b",
            color: "#fff",
          }}
        >
          <th style={thStyle}>Name</th>
          <th style={thStyle}>Age</th>
          <th style={thStyle}>Department</th>
          <th style={thStyle}>Salary</th>
          <th style={thStyle}>Skills</th>
          <th style={thStyle}>Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee, index) => (
          <tr
            key={employee._id}
            style={{
              background: index % 2 === 0 ? "#ffffff" : "#f8fafc",
            }}
          >
            <td style={tdStyle}>{employee.name}</td>
            <td style={tdStyle}>{employee.age}</td>
            <td style={tdStyle}>{employee.department}</td>

            <td style={tdStyle}>
              ₹ {employee.salary.toLocaleString("en-IN")}
            </td>

            <td style={tdStyle}>
              {employee.skills.join(", ")}
            </td>

            <td style={tdStyle}>
              <button
                style={editButton}
                onClick={() => onEdit(employee)}
              >
                ✏️ Edit
              </button>

              <button
                style={deleteButton}
                onClick={() => handleDelete(employee._id)}
              >
                🗑 Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const thStyle = {
  padding: "18px",
  fontSize: "18px",
  fontWeight: "600",
};

const tdStyle = {
  padding: "18px",
  textAlign: "center",
  borderBottom: "1px solid #e5e7eb",
};

const editButton = {
  background: "#2563eb",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
  fontWeight: "600",
  transition: "0.3s",
};

const deleteButton = {
  background: "#ef4444",
  color: "#fff",
  border: "none",
  padding: "10px 18px",
  borderRadius: "8px",
  cursor: "pointer",
  fontWeight: "600",
  transition: "0.3s",
};

export default EmployeeTable;