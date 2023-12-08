import { Product } from "../interfaces"
import { product } from "../models/product.model"

export const getAll = () => {
  return product.find()
}

export const getById = (id: string) => {
  return product.findById(id)
}

export const updateById = (id: string, data: Product) => {
  return product.findByIdAndUpdate(id, data)
}

export const createOne = (data: Product) => {
  return product.create(data)
}

export const deleteById = (id: string) => {
  return product.findByIdAndDelete(id)
}