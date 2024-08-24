import { NextRequest } from "next/server";
import jwt from 'jsonwebtoken'
import { COOKIE_TOKEN_KEY } from "@/lib/constants";

type TokenData = {
  id: string;
  username: string;
  email: string;
}

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get(COOKIE_TOKEN_KEY)?.value || ''
    const tokenData = jwt.verify(token, process.env.JWT_SECRET_KEY!) as TokenData
    return tokenData.id
  } catch (error: any) {
    throw new Error(error.message)
  }
}
