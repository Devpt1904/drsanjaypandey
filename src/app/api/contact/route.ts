import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { status, mode, intent, name, email } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    // Save to the database
    try {
      const sql = getDb();
      
      // Ensure the table exists. In production, you'd usually run this as a migration script,
      // but keeping it here guarantees it works immediately upon connecting the DB.
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

      // Insert the new consultation request into Neon Postgres
      await sql`
        INSERT INTO consultation_requests (name, email, status, mode, intent) 
        VALUES (${name}, ${email}, ${status || null}, ${mode || null}, ${intent || null})
      `;
    } catch (dbError) {
      console.error('Database Error:', dbError);
      return NextResponse.json(
        { error: 'Failed to save to database.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: 'Consultation request saved successfully.' });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred on the server.' },
      { status: 500 }
    );
  }
}
