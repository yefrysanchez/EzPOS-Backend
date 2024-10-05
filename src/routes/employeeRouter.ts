import {Router} from "express"
import { createEmployee, deleteEmployee, getAllEmployees, getEmployee } from "../controllers/employeeController"
const employeeRouter = Router()

employeeRouter.post("/", createEmployee)
employeeRouter.get("/", getAllEmployees)
employeeRouter.get("/:id", getEmployee)
employeeRouter.delete("/:id", deleteEmployee)








export default employeeRouter