import {Router} from "express"
import { createProducts, deleteProduct, getProducts } from "../controllers/productsController"

const productsRouter = Router()

productsRouter.get("/" , getProducts)
productsRouter.post("/" , createProducts)
productsRouter.delete("/:id" , deleteProduct)






export default productsRouter