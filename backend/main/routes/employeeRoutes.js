import { Router } from "express";
import employeeController from "../controllers/employeeController.js";

const employeeRoutes = Router();

employeeRoutes.get("/getEmployees", employeeController.getEmployees);
employeeRoutes.post("/getEmployeeById", employeeController.getEmployeeById);
employeeRoutes.post("/addEmployee", employeeController.addEmployee);
employeeRoutes.put("/:id", employeeController.updateEmployee);
employeeRoutes.delete("/:id", employeeController.removeEmployee);
employeeRoutes.post("/login", employeeController.employeeLogin);

export default employeeRoutes;