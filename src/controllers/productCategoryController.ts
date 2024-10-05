import { Request, Response } from "express";
import prisma from "../db/prismaClient";




export async function createCategoryProduct(req:Request , res:Response) {
    const {name , accountId} = req.body
    try {
        await prisma.productCategory.create({
            data: {
                name,
                accountId
            }
        })

        res.status(201).json("Product category created.")
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}

export async function getCategoryProduct(req:Request , res:Response) {

    try {
        const productCategory = await prisma.productCategory.findMany()

        res.status(200).json(productCategory)
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}

export async function deleteCategoryProduct(req:Request , res:Response) {
    const id = parseInt(req.params.id)
    try {
        const category = await prisma.productCategory.delete({
            where: {
                id
            }
        })

        if(!category){
            return res.status(404).json("Product category does not exist.")
        }

        res.status(201).json("Product category deleted.")
    } catch (error) {
        console.error(error)
        res.status(500).json(error)
    }
}