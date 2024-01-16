import express from 'express';
import routes from './src/programs/routes.js';
import cors from 'cors';
import supabase from './src/config/supabaseClient.js';

const app = express();
// app.use(cors());
const corsOptions = {
    origin: process.env.FRONTEND_URL || "https://hero-vired-project.vercel.app/",
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

app.get('/',async(req,res)=>{
    try {
        const {data,error} = await supabase.from('users').select();
        res.json({msg:data});
    } catch (error) {
        console.log(error);
    }
});

app.use('/', routes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});