import { Request, Response } from "express";
import { createOne, getAll } from "../services/product.service";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAll();
    return res.status(200).json(products)
  } catch (error) {
    return res.status(500).json({
      error: 500,
      message: error
    })
  }
}

export const createProduct = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    await createOne(data)
    return res.status(200).json({
      message: 'Tạo sản phẩm thành công'
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}