import authProvisers from "@/lib/auth";
import nextAuth from "next-auth";

const authHandler = nextAuth(authProvisers);

export { authHandler as GET, authHandler as POST };