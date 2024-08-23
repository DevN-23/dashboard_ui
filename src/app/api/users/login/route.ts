import connect from "@/config/dbConnection";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { SERVER_CONSTANTS } from "@/lib/constants";

connect();

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    const user = await User.findOne({ email })
    if (!user) {
      return NextResponse.json({ message: 'Bad Request!' }, { status: 404 })
    }
    const isValidPassword = await bcryptjs.compare(password, user.password)
    if (!isValidPassword) {
      return NextResponse.json({ message: 'Bad Request!' }, { status: 404 })
    }

    // create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email
    }

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY!, { expiresIn: SERVER_CONSTANTS.TOKEN_EXPIRY_DURATION })

    console.log(' -toje', token)
    const response = NextResponse.json({ message: 'Login Success!', success: true }, { status: 200 })

    response.cookies.set('token', token, { httpOnly: true })

    return response

  } catch (error) {
    return NextResponse.json({ message: 'Failed!', error }, { status: 501 })
  }
}
