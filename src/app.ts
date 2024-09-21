import express, { Request, Response } from "express"
import { config } from "dotenv"
import authRounter from "./routes/authRouter"
config()
const app = express()

const PORT = process.env.PORT || 3000


app.get("/", (req:Request, res:Response) => {
    res.send("Hello World")
})

//Login Register
app.use("/api/auth", authRounter)


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})