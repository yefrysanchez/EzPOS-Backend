import {Router} from "express"
import { createProducts, deleteProduct, editProduct, getProducts } from "../controllers/productsController"

const productsRouter = Router()

productsRouter.get("/" , getProducts)
productsRouter.post("/" , createProducts)
productsRouter.patch("/:id" , editProduct)
productsRouter.delete("/:id" , deleteProduct)






export default productsRouter