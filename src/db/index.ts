import { drizzle } from 'drizzle-orm';
import { Pool } from 'pg';
import { sql } from 'drizzle-orm';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});
export const db = drizzle(pool);

// Define a User model
export const User = db.table('users', {
  id: sql.int().primaryKey().autoIncrement(),
  name: sql.text(),
});