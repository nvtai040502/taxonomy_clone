import GitHub from "next-auth/providers/github"

import type { NextAuthConfig } from "next-auth"

export default {
  pages: {
    signIn: '/login',
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig