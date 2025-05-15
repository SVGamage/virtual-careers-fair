import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "mongodb", // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
    maxPasswordLength: 32,
    autoSignIn: true,
    // requireEmailVerification: true,
    // async sendResetPassword(data, request) {
    //   // Email the user with a link to reset their password
    // },
  },
  // emailVerification: {
  //   sendOnSignUp: true,
  //   autoSignInAfterVerification: true,
  // },
  account: {
    accountLinking: {
      enabled: true,
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  advanced: {
    database: {
      generateId: false,
    },
  },
  plugins: [nextCookies()],
});
