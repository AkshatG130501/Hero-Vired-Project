import express from 'express';
import session from "express-session";
import bcrypt from "bcrypt";
import signupRoutes from './src/programs/routes.js';
import cors from 'cors';

const app = express();
app.use(cors());

// Middleware to parse JSON data in the request body
app.use(express.json());

// Middleware to parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;
// routes

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.use('/signup', signupRoutes);

// app.use('/programs',programRoutes);
// app.use('/programs',programRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});