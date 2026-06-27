import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api/axios";

// Fetch Employees
export const fetchEmployees = createAsyncThunk(
  "employee/fetchEmployees",
  async () => {
    const response = await API.get("/employees");
    return response.data.employees;
  },
);

// Add Employee
export const addEmployee = createAsyncThunk(
  "employee/addEmployee",
  async (employee) => {
    const response = await API.post("/employees", employee);
    return response.data.employee;
  },
);

// Delete Employee
export const deleteEmployee = createAsyncThunk(
  "employee/deleteEmployee",
  async (id) => {
    await API.delete(`/employees/${id}`);
    return id;
  },
);

const employeeSlice = createSlice({
  name: "employee",

  initialState: {
    employees: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // Fetch Employees
      .addCase(fetchEmployees.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchEmployees.fulfilled, (state, action) => {
        state.loading = false;
        state.employees = action.payload;
      })

      .addCase(fetchEmployees.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Add Employee
      .addCase(addEmployee.fulfilled, (state, action) => {
        state.employees.push(action.payload);
      })

      // Delete Employee
      .addCase(deleteEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.filter(
          (employee) => employee._id !== action.payload,
        );
      })

      // Update Employee
      .addCase(updateEmployee.fulfilled, (state, action) => {
        state.employees = state.employees.map((emp) =>
          emp._id === action.payload._id ? action.payload : emp,
        );
      });

    // Update Employee
    export const updateEmployee = createAsyncThunk(
      "employee/updateEmployee",
      async ({ id, employee }) => {
        const response = await API.put(`/employees/${id}`, employee);
        return response.data.employee;
      },
    );
  },
});

export default employeeSlice.reducer;
