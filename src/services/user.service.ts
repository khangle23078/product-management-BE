import { User } from "../interfaces/user"
import { user } from "../models/user.model"

export const findByEmail = (email: string) => {
  return user.findOne({ email: email }).exec()
}

export const createUser = (data: User) => {
  return user.create(data)
}