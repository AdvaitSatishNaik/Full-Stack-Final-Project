import Employee from "../models/Employee.js";
import Project from "../models/Project.js";

// Dashboard Report
export const dashboardReport = async (req, res) => {
  try {

    // 1. Total Employees
    const totalEmployees = await Employee.countDocuments();

    // 2. Department Wise Count
    const departmentWise = await Employee.aggregate([
      {
        $group: {
          _id: "$department",
          count: { $sum: 1 }
        }
      },
      {
        $project: {
          _id: 0,
          department: "$_id",
          count: 1
        }
      }
    ]);

    // 3. Highest Salary Employee
    const highestSalaryEmployee = await Employee.findOne().sort({
      salary: -1
    });

    // 4. Total Project Budget
    const totalBudget = await Project.aggregate([
      {
        $group: {
          _id: null,
          totalBudget: {
            $sum: "$budget"
          }
        }
      }
    ]);

    res.status(200).json({
      totalEmployees,
      departmentWise,
      highestSalaryEmployee,
      totalBudget:
        totalBudget.length > 0 ? totalBudget[0].totalBudget : 0,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

export const employeeProjectReport = async (req, res) => {

  try {

    const report = await Employee.aggregate([

      {
        $lookup: {
          from: "projects",
          localField: "_id",
          foreignField: "employeeId",
          as: "projects"
        }
      },

      {
        $project: {
          name: 1,
          department: 1,
          projects: {
            title: 1,
            budget: 1
          }
        }
      }

    ]);

    res.status(200).json(report);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};