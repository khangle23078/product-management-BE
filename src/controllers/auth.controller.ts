import { Request, Response } from "express";
import { createUser, findByEmail } from "../services/user.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { email, user_name, password } = req.body
    const existUser = await findByEmail(email)
    console.log(existUser);

    if (existUser) {
      return res.status(400).json({
        message: 'Email đã được đăng ký'
      })
    }
    await createUser({ email, user_name, password })
    return res.status(200).json({
      status: 200,
      message: 'Đăng ký thành công'
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}

export const Login = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      message: 'Đăng nhập thành công'
    })
  } catch (error) {

  }
}