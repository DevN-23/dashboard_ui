import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { WEB_ROUTES } from './lib/constants'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = ['/login', '/signup'].includes(path)

  const token = request.cookies.get('token')?.value || ''

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL(WEB_ROUTES.ADMIN, request.url))
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL(WEB_ROUTES.LOGIN, request.url))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/list/:path*',
    '/admin',
    '/login',
    '/signup',
  ]
}
