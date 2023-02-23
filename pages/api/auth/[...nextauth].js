import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: process.env.NextAuth_SECRET,
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            async authorize(credentials, req) {
                /// console.log('i am here!') 
                if (credentials.status == 200) {
                    return credentials;
                } else return null;
            },
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            // console.log('i am here!',token)

            let obj = { "number": token.number, "dial_code": token.dial_code, "email": token.email };
            const datauser = await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/users/profile`, {
                method: "POST",
                body: JSON.stringify(obj)
            }).then(response => response.json());

            session.user = datauser.data.data;
            return session;
        },
    },
    pages: {
        signIn: '/login',
    }
}

export default NextAuth(authOptions);