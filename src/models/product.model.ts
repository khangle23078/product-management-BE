import { Schema, model } from "mongoose";
import { Product } from "../interfaces";

const productModel = new Schema<Product>({
  name: {
    type: String,
    required: true
  },
  image: {
    public_id: String,
    url: String
  },
  price: {
    type: Number,
    required: true
  },
  desc: {
    type: String,
    required: true
  }
}, { timestamps: true })

export const product = model('product', productModel)