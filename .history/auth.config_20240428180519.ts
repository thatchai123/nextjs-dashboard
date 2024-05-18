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
            if (user) {
                return {...token,
                    id:user.name,
                    role:"admin"
                }
            }

            return token
        },
         async session({ session, token }:any) {
          
            return {
                ...session,
                user: {
                    ...session.user,
                    id:token.email,
                    role:token.role
                }
            }
        }
    },
    providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;