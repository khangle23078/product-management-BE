import { Product } from "../interfaces"
import { product } from "../models/product.model"

export const getAll = () => {
  return product.find()
}

export const createOne = (data: Product) => {
  return product.create(data)
}