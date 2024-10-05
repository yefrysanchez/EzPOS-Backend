import {Router} from "express"
import { createCategoryProduct, deleteCategoryProduct, getCategoryProduct } from "../controllers/productCategoryController"

const categoryRounter = Router()

categoryRounter.get("/", getCategoryProduct)
categoryRounter.post("/", createCategoryProduct)
categoryRounter.delete("/:id", deleteCategoryProduct)








export default categoryRounter