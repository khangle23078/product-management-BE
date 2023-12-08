import express, { Application, json, urlencoded } from "express"
import cors from 'cors';
import helmet from "helmet";
import productRoute from './routes/v1/product.route'
import { connectDB } from "./database/connectDB";

const app: Application = express()

app.use(json({ limit: '50mb' }))
app.use(urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use('/api/v1/product', productRoute)
connectDB()

export default app;
