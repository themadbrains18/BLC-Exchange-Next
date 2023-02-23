import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  secret: process.env.NextAuth_SECRET,
  // Configure one or more authentication providers



  providers: [


    //=================================================================//
    // google auth management
    //=================================================================//

    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        
        authorization: {
            params: {
              prompt: "consent",
              access_type: "offline",
              response_type: "code"
            }
          }
    }),

    //=================================================================//
    // Credentials auth management
    //=================================================================//


    CredentialsProvider({
        // The name to display on the sign in form (e.g. "Sign in with...")
        name: "Credentials",
        async authorize(credentials, req) {

            if (credentials.status == 200) {
                let user = credentials
                return user;
            } else return null;
        },
    })
   

    // ...add more providers here
  ],
  session : {

  },
  callbacks: {

        async signIn({ account, profile }) {
             console.log(account.provider,' provider===')
             
             let flag = true;
             //=================================================================//
             // Credentials auth management
             //=================================================================//

             if(account.provider == "credentials"){
                flag = true
             }else if(account.provider == "google"){
                // console.log(profile, ' profile')

                flag = true
             }

             return flag
        },
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
        }

    },
    pages: {
        signIn: '/login',
    },
    
}

export default NextAuth(authOptions);