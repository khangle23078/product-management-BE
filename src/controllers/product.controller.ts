import { Request, Response } from "express";

export const getProducts = (req: Request, res: Response) => {
  res.status(200).json({
    message: 'hello world'
  })
}