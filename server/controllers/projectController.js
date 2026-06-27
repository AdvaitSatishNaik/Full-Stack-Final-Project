import Project from "../models/Project.js";

// Create Project
export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);

    res.status(201).json({
      success: true,
      message: "Project Created Successfully",
      project,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Get All Projects
export const getProjects = async (req, res) => {
  try {

    const projects = await Project.find().populate(
      "employeeId",
      "name department"
    );

    res.status(200).json({
      success: true,
      projects,
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Update Project
export const updateProject = async (req, res) => {
  try {

    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json(project);

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};

// Delete Project
export const deleteProject = async (req, res) => {
  try {

    await Project.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Project Deleted Successfully",
    });

  } catch (error) {

    res.status(500).json({
      message: error.message,
    });

  }
};