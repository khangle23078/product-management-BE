import { Request, Response } from "express";
import cloudinary from "../config/cloudinary.config";

export const uploadFile = (req: Request, res: Response) => {
  try {
    const image = req.file;
    return res.status(200).json({
      status: 200,
      message: "Upload ảnh thành công",
      data: {
        url: image?.path,
        public_id: image?.filename
      }
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error
    })
  }
}

export const deleteFile = async (req: Request, res: Response) => {
  try {
    const { public_id } = req.body;
    await cloudinary.uploader.destroy(public_id);
    return res.status(200).json({
      status: 200,
      message: "Xóa ảnh thành công",
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: true,
      message: error
    })
  }
}