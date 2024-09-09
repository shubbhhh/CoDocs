import nextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
// import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";


const authHandler = nextAuth({
    // adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        CredentialsProvider({
            name: "Email",
            credentials: {
                username: { label: "Email", type: "text", placeholder: "Email" },
                password: { label: "Password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                return {
                    id: "user1"
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.CLIENT_ID ?? '',
            clientSecret: process.env.CLIENT_SECRET ?? '',
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
  
    // Uncomment the following lines when add custom signin page added
    // pages: {
    //   signIn: '/signin',
    // }
})


export { authHandler as GET, authHandler as POST };