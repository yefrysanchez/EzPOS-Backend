import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();
//Create Employeee /////////////
export async function createEmployee(req: Request, res: Response) {
  const { pin, firstName, lastName, isAdmin, accountId } = req.body;

  try {
    await prisma.employee.create({
      data: {
        name: `${firstName} ${lastName}`,
        pin,
        isAdmin,
        accountId,
      },
    });
    
    res.status(201).json("Employee created.")
  
  } catch (error) {
    console.error("Error creating employee:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the employee." });
  }
}


//Get All Employees /////////////
export async function getAllEmployees(req: Request, res: Response) {

  
    try {
      const employees = await prisma.employee.findMany();

      res.status(200).json(employees)
    
    } catch (error) {
      console.error("Error creating employee:", error);
      res
        .status(500)
        .json({ error: "An error occurred while creating the employee." });
    }
}
  
//Get Single Employee /////////////
export async function getEmployee(req: Request, res: Response) {
    const id = parseInt(req.params.id)
  
    try {
      const employee = await prisma.employee.findUnique({
        where: {
            id
        }
      })

      if(!employee){
        return res.status(404).json("Employee not found.")
      }

      res.status(200).json(employee)
    
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json(error);
    }
}

//Delete Employee /////////////
export async function deleteEmployee(req: Request, res: Response) {
    const id = parseInt(req.params.id)
  
    try {
      const employee = await prisma.employee.delete({
        where: {
            id
        }
      })

      if(!employee){
        return res.status(404).json("Employee no exist")
      }

      res.status(200).json("Employee deleted")
    
    } catch (error) {
      console.error( error);
      res
        .status(500)
        .json( error);
    }
}
  