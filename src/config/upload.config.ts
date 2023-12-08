import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.config";
import multer from 'multer'

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'product_management'
  } as { folder: string }
})

export const upload = multer({ storage: storage })