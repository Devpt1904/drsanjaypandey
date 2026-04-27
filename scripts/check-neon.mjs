import { neon } from '@neondatabase/serverless';

async function check() {
  try {
    const url = process.env.DATABASE_URL;
    console.log("URL exists:", !!url);
    if (!url) {
      console.log("No DATABASE_URL found.");
      return;
    }
    
    // Check if it's the placeholder
    if (url.includes('[user]')) {
      console.log("You are still using the placeholder DATABASE_URL.");
      return;
    }

    const sql = neon(url);
    const result = await sql`SELECT 1 as connected`;
    console.log("Connection successful:", result);
  } catch (err) {
    console.error("Connection failed:", err.message || err);
  }
}

check();
