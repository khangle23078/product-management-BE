import { Router } from "express";
import { getProducts } from "../../controllers/product.controller";

const route = Router()

route.get('/list', getProducts)

export default route