import express, { Application } from "express"
import cors from 'cors';
import helmet from "helmet";
import productRoute from './routes/v1/product.route'

const app: Application = express()

app.use(cors())
app.use(helmet())
app.use('/api/v1/product', productRoute)

export default app;