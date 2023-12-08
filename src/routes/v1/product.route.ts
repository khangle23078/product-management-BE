import { Router } from "express";
import { createProduct, getProduct, getProducts, updateProduct } from "../../controllers/product.controller";

const route = Router()

route.get('/list', getProducts)
route.get('/:id', getProduct)
route.post('/create', createProduct)
route.put('/update/:id', updateProduct)

export default route