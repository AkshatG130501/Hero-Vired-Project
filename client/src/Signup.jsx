import axios from 'axios';
import React, { useState } from 'react';
import OTPInput from './OtpForm';

const Signup = () => {
  const [sentOtpState, setSentOtpState] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        otp: otp,
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

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/signup/otp', {
        email: email
      });

      // Handle the response as needed
      console.log('enter otp');
      setSentOtpState(true);
    } catch (error) {
      // Handle errors
      console.error('Error during signup:', error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 shadow-md rounded-md mt-20">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      {!sentOtpState && (
        <form className="mb-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Full Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="button"
            onClick={sendOtp}
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Sign Up
          </button>
        </form>
      )}
      {sentOtpState && <OTPInput handleSignup={handleSignup} otp={otp} setOtp={setOtp} />}
    </div>
  );
};

export default Signup;
