import { Request, Response } from "express";
import { createUser, findByEmail, findByUserName } from "../services/user.service";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

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

export const Login = async (req: Request, res: Response) => {
  try {
    const { user_name, password } = req.body;
    const existUser = await findByUserName(user_name)
    if (!existUser) {
      return res.status(400).json({
        message: 'Tài khoản chưa được đăng ký'
      })
    }

    const comparePassword = await bcrypt.compare(password, existUser.password)
    if (!comparePassword) {
      return res.status(400).json({
        message: 'Mật khẩu không trùng khớp'
      })
    }

    const accessToken = jwt.sign({ user: existUser._id }, "asd21vaszx", {
      expiresIn: '1d',
    })

    return res.status(200).json({
      status: 200,
      message: 'Đăng nhập thành công',
      data: {
        user_name: user_name,
        accessToken: accessToken
      }
    })
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error
    })
  }
}