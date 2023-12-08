import mongoose from "mongoose"

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/product_management')
    console.log("::Connect database success!");
  } catch (error) {
    console.log("::Error", error);
  }
}