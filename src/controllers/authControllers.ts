import { Request, Response } from "express";
import bcrypt from "bcrypt";
import prisma from "../db/prismaClient";

// Log in /////
export async function login(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const account = await prisma.account.findUnique({
      where: {
        email,
      },
    });
    if (!account) {
      return res.status(400).json({ msg: "Account not found." });
    }
    // Compare the provided password with the hashed password
    const isMatched = await bcrypt.compare(password, account.password);
    if (!isMatched) return res.status(400).send({ msg: "Invalid credentials" });

    res.json(account);
  } catch (error) {
    console.error(error);
  }
}

// Register /////
export async function register(req: Request, res: Response) {
  const { name, email, password } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Please complete all fields." });
    }
    //Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await prisma.account.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json(user);
  } catch (error) {
    console.error(error);
  }
}

// Handle firstLogin /////


export async function handleFirstLogin(req: Request, res: Response) {
  const id = Number(req.params.id);
  const {firstLogin , taxPercentage} = req.body
  
  // Input validation
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format." });
  }

  try {
    const updateAccount = await prisma.account.update({
      where: { id },
      data: { firstLogin, taxPercentage },
    });
    
    return res.status(200).json(updateAccount); 
  } catch (error) {
    const e = error as any;

    // Log the error for debugging
    console.error(e);

    if (e && e.code === "P2025") {
      return res.status(404).json({ error: "Account not found." });
    }

    return res.status(500).json({ error: "Could not update account." });
  }
}

