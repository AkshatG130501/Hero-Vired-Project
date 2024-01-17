import express from 'express';
import routes from './src/programs/routes.js';
import cors from 'cors';
import supabase from './src/config/supabaseClient.js';

const app = express();
    // app.use(
    //     cors({
    //         origin: "http://localhost:5173/", // Update this with the correct origin of your frontend application
    //         credentials: true,
    //       })
    // );

    app.use(cors({
        origin: true,
        credentials: true,
      }));
// const corsOptions = {
//     origin: "https://hero-vired-project.vercel.app/",
//     credentials: true,
//     optionSuccessStatus: 200,
// };
  
// app.use(cors(corsOptions));
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

// app.get('/testProgram',async (req, res) => {
//     const {data,error} = await supabase.from('programs').select();
//     if(data){
//         console.log(data);
//       res.send(data);
//     }else{
//       console.log(error);
//     }
//   })


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});