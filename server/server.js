import express from 'express';
import routes from './src/programs/routes.js';
import cors from 'cors';

const app = express();
// app.use(cors());
const corsOptions = {
    origin: process.env.FRONTEND_URL || "https://hero-vired-project.vercel.app",
    credentials: true,
    optionSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
// Middleware to parse JSON data in the request body
app.use(express.json());

// Middleware to parse URL-encoded data in the request body
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;
// routes

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.use('/', routes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});