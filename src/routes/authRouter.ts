import {Router} from "express"
import { handleFirstLogin, login, register } from "../controllers/authControllers"
const authRounter = Router()

authRounter.post("/login", login)
authRounter.post("/register", register)
authRounter.patch("/updateacc/:id", handleFirstLogin)







export default authRounter