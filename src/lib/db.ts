import { neon } from '@neondatabase/serverless';

export function getDb() {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not configured in environment variables');
  }
  
  // The neon function returns a tagged template literal that handles pooling/connections automatically
  return neon(process.env.DATABASE_URL);
}
