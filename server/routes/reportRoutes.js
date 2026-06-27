import express from "express";

import {
  dashboardReport,
  employeeProjectReport
} from "../controllers/reportController.js";

const router = express.Router();

router.get("/dashboard", dashboardReport);

router.get("/employee-projects", employeeProjectReport);

export default router;