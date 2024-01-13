import { sendOTP } from "../../otp.js";
import { getTasks } from "../../db.js";

export const getPrograms = async (req, res) => {
  // let { data: Programs, error } = await supabase
  // .from('table1')
  // .select();
  let rows = await getTasks();
  return res.status(200).json({
    msg: rows
  });
};


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
  const data = await req.body;
  const { fullname, email, password } = data;
  // const userExists = await User.findOne({ username: username });
  // if username is already taken
  // if (userExists) {
  //   req.flash("userExistsMessage", "Username already taken. Try Again");
  //   return res.redirect("/register");
  // }

  // const hashedPw = await bcrypt.hash(password, 12); // (password, saltRounds)
  const hashedPw = password;
  // const newUser = new User({ username: username, password: hashedPw });
  // const ans = await newUser.save();
  // req.session.session_id = newUser._id;
  console.log("sending otp");
  sendOTP(email);
  console.log("sent otp");
  
  console.log(fullname, email, password);
  res.redirect("/");
};

// function sendOTP(email) {
//   let otp = Math.floor(1000 + Math.random() * 9000);
//   // send otp to user email

//   console.log('OTP:', otp);

//   const mailOptions = {
//     from: 'adobeashu1812@gmail.com',
//     to: email,
//     subject: "OTP",
//     text: otp,
//   };
//   transporter.sendMail(mailOptions, (error, info) => {
//       if (error) {
//           console.error(error);
//           res.status(500).send('Error sending email');
//       } else {
//           console.log('Email sent: ' + info.response);
//           res.send('Email sent successfully');
//       }
//   });
// }