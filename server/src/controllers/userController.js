// import { sendOTP } from "../../otp.js";
// import { getTasks } from "../programs/queries.js";
import session from "express-session";
import bcrypt from "bcrypt";
// import pool from "../../db.js";

export const sendOtpToUser = async (req, res) => {
  try {
    const data = await req.body;
    const { email } = data;
    console.log("sending otp");
    sendOTP(email);
    console.log("sent otp");
    res.json({message: "otp sent"});
  } catch (error) {
    console.error(error);
  }
}

export const getNewUser = (req, res) => {
  // if already logged in
  // if (req.session.session_id) {
  //   req.flash("loggedInMessage", "Already logged in!"); // Set a flash message by passing the key, followed by the value, to req.flash().
  //   return res.redirect("/tasks");
  // }
  // show form to register
  res.json({msg: "registered new user"});
  // res.render("signup", { messages: req.flash("userExistsMessage") });
};

export const postNewUser = async (req, res) => {
  // post request to register a new user
  try {
      const data = await req.body;
      const { fullname, email, password } = data;
      console.log('fullname, email, password', fullname, email, password);
      // const emailExists = await pool.query('select email from users where "email" = $1', [email]);
      // console.log('emailExists', emailExists);
      // if (emailExists) {
      // // req.flash("userExistsMessage", "Username already taken. Try Again");
      //   return res.redirect("/signup");
      // }

      // TODO: fetch from db: otp
      // if otp matches
      const otpMatch = true;

      if (!otpMatch) {
        return res.json({message: "OTP verification failed, please try again."});
      }
      

      const hashedPw = await bcrypt.hash(password, 12); // (password, saltRounds)
      const newUser = await pool.query('INSERT INTO users (fullname, password, email) VALUES ($1, $2, $3)', [fullname, hashedPw, email]);
      console.log('newUser', newUser);
      // req.session.session_id = newUser._id;
      console.log(fullname, email, password);
      return res.json({message: "user signed up"});
        
  } catch (error) {
    console.error(error);
  }
  
};