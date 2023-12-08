import { Router } from "express";
import { createProduct, getProducts } from "../../controllers/product.controller";

const route = Router()

route.get('/list', getProducts)
route.post('/create', createProduct)

export default route