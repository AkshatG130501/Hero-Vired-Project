// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = 'https://ausfuolwbzhaqmtfuhhf.supabase.co'
// // const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1c2Z1b2x3YnpoYXFtdGZ1aGhmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUxNTk4ODcsImV4cCI6MjAyMDczNTg4N30.h7QV-I_LXAKQCiiTL4KOmB1Xd_YaJDOhstzNwHDOfCs'
// const supabase_service_key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1c2Z1b2x3YnpoYXFtdGZ1aGhmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwNTE1OTg4NywiZXhwIjoyMDIwNzM1ODg3fQ.RwE7putPIvofxuEBCXbrEzdGlAS9WA6XB7PleyRcYig';
// const supabase = createClient(supabaseUrl, supabaseKey)

// export default supabase;


import dotenv from 'dotenv';
import pg from 'pg';
const { Pool } = pg;

dotenv.config();

// Creating a pool of connections
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: "mydatabase",
    password: "mysecretpassword",
    port: 5432,
  });

  // Throws an error on connection
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err);
    console.log(client);
    process.exit(-1);
  });
  
  

  export const getTasks = async () => {
    try {
      const result = await pool.query(`
      SELECT * FROM dummy_table;`);
      console.log(result);
      if (result.rows) {
        console.log(`showing all entries`);
        console.table(result.rows);
      } else {
        console.log(`cannot show entries`);
      }
      return result.rows;
    } catch (error) {
      console.log(`something went wrong in getTasks \n${error}\nthis is not cool`);
    }
  
  }
  