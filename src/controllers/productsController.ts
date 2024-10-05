import { Request, Response } from "express";
import prisma from "../db/prismaClient";

// POST create products
export async function createProducts(req: Request, res: Response) {
  const { name, price, categoryId } = req.body;
  if(!name || !price || !categoryId){
    return res.status(400).json("Missing fields.");
  }
  try {
    await prisma.product.create({
      data: {
        name,
        price,
        categoryId,
      },
    });

    res.status(201).json("Product created")
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

// GET get all products
export async function getProducts(req: Request, res: Response) {
    try {
        const products = await prisma.product.findMany()
        res.status(200).json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
      }
}

// DELETE delete product
export async function deleteProduct(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    try {
        await prisma.product.delete({
            where: {
                id
            }
        })
        res.status(200).json("Product deleted.")
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
      }
}
