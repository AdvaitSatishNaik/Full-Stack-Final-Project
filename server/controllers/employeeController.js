import Employee from "../models/Employee.js";

// Create Employee
export const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);

    res.status(201).json({
      success: true,
      message: "Employee Created Successfully",
      employee,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get Employees
export const getEmployees = async (req, res) => {
  try {

    const employees = await Employee.find().populate(
      "userId",
      "name email role"
    );

    res.status(200).json({
      success: true,
      employees,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Update
export const updateEmployee = async (req, res) => {
  try {

    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(employee);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Delete
export const deleteEmployee = async (req, res) => {
  try {

    await Employee.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Employee Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};