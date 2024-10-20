import {Router} from "express"
import { createEmployee, deleteEmployee, EditEmployee, getAllEmployees, getEmployee } from "../controllers/employeeController"
const employeeRouter = Router()

employeeRouter.post("/", createEmployee)
employeeRouter.get("/", getAllEmployees)
employeeRouter.get("/:id", getEmployee)
employeeRouter.patch("/", EditEmployee)
employeeRouter.delete("/:id", deleteEmployee)








export default employeeRouter