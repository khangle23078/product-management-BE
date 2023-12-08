import { Request, Response } from "express";
import { createOne, deleteById, getAll, getById, updateById } from "../services/product.service";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await getAll();
    return res.status(200).json({
      status: 200,
      data: products
    })
  } catch (error) {
    return res.status(500).json({
      error: 500,
      message: error
    })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const product = await getById(id)
    return res.status(200).json({
      status: 200,
      data: product
    })
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

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await updateById(id, req.body)
    return res.status(200).json({
      status: 200,
      message: "Cập nhật sản phẩm thành công"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteById(id)
    return res.status(200).json({
      status: 200,
      message: "Xóa sản phẩm thành công"
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}