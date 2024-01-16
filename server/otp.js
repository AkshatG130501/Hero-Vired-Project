// import nodemailer from 'nodemailer';
// import pool from './db.js';

//   // Create a transporter using SMTP
// const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//         user: 'adobeashu1812@gmail.com',
//         pass: 'kjch wbxj frub scjm',
//     },
// });

// export function sendOTP(email) {
//     let otp = Math.floor(1000 + Math.random() * 9000);
//     // todo
//     // add column otp
//     // email, otp
//     console.log('OTP:', otp);

//     const updateOTPSql = 'UPDATE users SET otp = $1 WHERE email = $2';
//     pool.query(updateOTPSql, [otp, email], (error, result) => {
//         if (error) {
//             console.error('Error updating OTP:', error);
//         } else {
//             console.log('OTP updated successfully');
//         }
//     });

//     const mailOptions = {
//       from: 'adobeashu1812@gmail.com',
//       to: email,
//       subject: "OTP for checking",
//       text: `Your OTP for verification: ${otp.toString()}`,
//     };

//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.error(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
//   }

//   sendOTP('guptaakshat370@gmail.com');





// // GET REGISTER
// app.get("/register", (req, res) => {
//     // if already logged in
//     if (req.session.session_id) {
//       req.flash("loggedInMessage", "Already logged in!"); // Set a flash message by passing the key, followed by the value, to req.flash().
//       return res.redirect("/tasks");
//     }
//     // show form to register
//     res.render("signup", { messages: req.flash("userExistsMessage") });
//   });
  
//   // POST REGISTER
//   app.post("/register", async (req, res) => {
//     // post request to register a new user
//     const { username, password } = req.body;
//     const userExists = await User.findOne({ username: username });
//     // if username is already taken
//     if (userExists) {
//       req.flash("userExistsMessage", "Username already taken. Try Again");
//       return res.redirect("/register");
//     }
  
//     const hashedPw = await bcrypt.hash(password, 12); // (password, saltRounds)
//     const newUser = new User({ username: username, password: hashedPw });
//     const ans = await newUser.save();
//     req.session.session_id = newUser._id;

//     sendOTP(username);
    
//     console.log(ans);
//     res.redirect("/");
//   });



