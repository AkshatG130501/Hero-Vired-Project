import axios from 'axios';
import React, { useState } from 'react';
import OTPInput from './OtpForm';

const Signup = () => {
    const [sentOtpState, setSentOtpState] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        fullname: name,
        email: email,
        password: password,
      });

      // Handle the response as needed
      console.log('Signup successful:', response.data);
      console.log('enter otp');
      setSentOtpState(true);
    } catch (error) {
      // Handle errors
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      {!sentOtpState && <form>
      <label>
          Full Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>}
      {sentOtpState && <OTPInput />}
    </div>
  );
};

export default Signup;
