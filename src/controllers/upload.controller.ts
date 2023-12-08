import { Request, Response } from "express";

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