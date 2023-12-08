import { Router } from "express";
import { upload } from "../../config/upload.config";
import { uploadFile } from "../../controllers/upload.controller";

const route = Router()
route.post('/upload', upload.single('file'), uploadFile)

export default route;