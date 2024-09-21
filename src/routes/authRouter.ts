import {Router} from "express"
import { login } from "../controllers/authControllers"
const authRounter = Router()

authRounter.get("/", login)







export default authRounter