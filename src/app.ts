import express, { Request, Response } from "express"
import { config } from "dotenv"
import authRounter from "./routes/authRouter"
import employeeRouter from "./routes/employeeRouter"
config()
const app = express()

const PORT = process.env.PORT || 3000


// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req:Request, res:Response) => {
    res.send("Hello World")
})

//Login Register
app.use("/api/auth", authRounter)
// Employees 
app.use("/api/employees", employeeRouter)


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})