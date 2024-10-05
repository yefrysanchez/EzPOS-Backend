import {Router} from "express"
import { createCategoryProduct, deleteCategoryProduct, getCategoryProduct } from "../controllers/productCategoryController"

const categoryRouter = Router()

categoryRouter.get("/", getCategoryProduct)
categoryRouter.post("/", createCategoryProduct)
categoryRouter.delete("/:id", deleteCategoryProduct)








export default categoryRouter