import { Schema, model } from "mongoose";
import { User } from "../interfaces/user";
import { genSalt, hash } from "bcrypt";

const userSchema = new Schema<User>({
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, { timestamps: true })


userSchema.pre('save', async function (next) {
  try {
    const salt = await genSalt(10)
    const hashedPassword = await hash(this.password, salt)
    this.password = hashedPassword
    next()
  } catch (error) {
    console.log(error);
  }
})

export const user = model('user', userSchema)