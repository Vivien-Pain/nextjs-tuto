import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
    // Exclut les chemins spécifiques pour ne pas bloquer les images ou l'API
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};