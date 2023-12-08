import { Router } from "express";
import { Login, register } from "../../controllers/auth.controller";

const route = Router()

route.post('/register', register)
route.post('/login', Login)

export default route