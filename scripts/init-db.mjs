import { neon } from '@neondatabase/serverless';


async function initDb() {
  if (!process.env.DATABASE_URL) {
    console.error('ERROR: DATABASE_URL is not set in your .env file!');
    process.exit(1);
  }

  console.log('Connecting to Neon Database...');
  const sql = neon(process.env.DATABASE_URL);

  try {
    console.log('Running setup script...');
    await sql`
      CREATE TABLE IF NOT EXISTS consultation_requests (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        status VARCHAR(255),
        mode VARCHAR(255),
        intent VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('SUCCESS: Table "consultation_requests" is ready!');
  } catch (error) {
    console.error('FAILED to initialize database:', error);
  }
}

initDb();
