import authConfig from "./auth.config"
import NextAuth from "next-auth"
export const { auth: middleware } = NextAuth(authConfig)

// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}