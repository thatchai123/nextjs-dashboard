import { data } from 'autoprefixer';
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
    pages: {
        signIn: '/login',
    },
     session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
     callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        }, async jwt({token,user}) {
            console.log(token)
            if (user) {
                return {...token,role:"admin"}
            }

            return token
        },
         async session({ session, token }:any) {
            console.log(token)
            return {
                ...session,
                user: {
                    ...session.user,
                }
            }
        }
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;