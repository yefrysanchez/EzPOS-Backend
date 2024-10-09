import express, { Request, Response } from "express";
import { config } from "dotenv";
import authRounter from "./routes/authRouter";
import employeeRouter from "./routes/employeeRouter";
import categoryRounter from "./routes/categoryRouter";
import prisma from "./db/prismaClient";
import productsRouter from "./routes/productsRouter";
import cors from "cors";

config();
const app = express();

const PORT = process.env.PORT || 3000;

//cors
const corsOptions = {
  origin: ["https://ezpos.pages.dev", "http://localhost:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // If you need to include credentials in requests
  optionsSuccessStatus: 204, // For legacy browser support
};
app.use(cors(corsOptions));

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});

//Login Register
app.use("/api/auth", authRounter);
// Employees
app.use("/api/employees", employeeRouter);
//Product Category
app.use("/api/productcategory", categoryRounter);
//Products
app.use("/api/products", productsRouter);

// Handle SIGINT to clean up Prisma client
process.on("SIGINT", async () => {
  console.log("Shutting down gracefully...");
  await prisma.$disconnect();
  process.exit(0);
});

app.listen(PORT, () => {
  console.log(`Running on port: ${PORT}`);
});
