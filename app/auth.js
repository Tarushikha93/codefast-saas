import NextAuth from "next-auth";

const config = { providers: [] };

export const { signIn, signOut, auth, handlers } = NextAuth(config);
