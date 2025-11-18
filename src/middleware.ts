import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('user-session')
  const isAdminLoggedIn = request.cookies.get('admin-session')
  
  // Proteger rutas de dashboard
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
  
  // Proteger rutas de admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (!isAdminLoggedIn) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/admin/:path*']
}
