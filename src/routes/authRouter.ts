import {Router} from "express"
import { login, register } from "../controllers/authControllers"
const authRounter = Router()

authRounter.post("/login", login)
authRounter.post("/register", register)







export default authRounter