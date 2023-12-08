import { Router } from "express";
import { upload } from "../../config/upload.config";
import { deleteFile, uploadFile } from "../../controllers/upload.controller";

const route = Router()
route.post('/upload', upload.single('file'), uploadFile)
route.post('/destroy', deleteFile)

export default route;