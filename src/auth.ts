import { SvelteKitAuth } from "@auth/sveltekit"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./db"
import google from "@auth/sveltekit/providers/google"
 
export const { handle, signIn, signOut } = SvelteKitAuth({
  adapter: DrizzleAdapter(db),
  providers: [google],
  callbacks: {
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string
      return session
    },
  },
  session: {strategy: "jwt"}
})