import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const { Client } = pg;



const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'mydatabase',
  user: 'postgres',
  password: 'mysecretpassword',
});

// const client = new Client({
//   host: 'dpg-cmj3agla73kc739o4slg-a.oregon-postgres.render.com',
//   port: 5432,
//   database: 'herovired_akshat',
//   user: 'herovired_akshat_user',
//   password: 'Yj7OiyhmRXbRHhSvHSCgFJ1Kep48Qbmx',
// });

try {
  await client.connect();
} catch (error) {
  console.error(error);
}


export default client;

// Creating a pool of connections
// const pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: "mydatabase",
//     password: "mysecretpassword",
//     port: 5432,
//   });


// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL
// });



  // Throws an error on connection
// pool.on('error', (err, client) => {
//     console.error('Unexpected error on idle client', err);
//     console.log(client);
//     process.exit(-1);
//   });


// async function getPostgresVersion() {
//   const client = await pool.connect();
//   try {
//     const response = await client.query('SELECT version()');
//     console.log(response.rows[0]);
//   } finally {
//     client.release();
//   }
// }

// getPostgresVersion();

// const pool = (() => {
//   if (process.env.NODE_ENV !== 'production') {
//       return new Pool({
//           connectionString: process.env.DATABASE_URL,
//           ssl: false
//       });
//   } else {
//       return new Pool({
//           connectionString: process.env.DATABASE_URL,
//           ssl: {
//               rejectUnauthorized: false
//             }
//       });
//   } })();
  
// export default pool;


// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     require: true,
//   },
// });

// async function getPostgresVersion() {
//   const client = await pool.connect();
//   try {
//     const response = await client.query('SELECT version()');
//     console.log(response.rows[0]);
//   } finally {
//     client.release();
//   }
// }

// getPostgresVersion();