import React from 'react';

const OTPInput = ({ handleSignup, otp, setOtp }) => {
  return (
    <div>
      <h2>Enter OTP</h2>
      <input className='border-2 border-black rounded p-2' type="text" maxLength="4" value={otp} onChange={(e) => setOtp(e.target.value)} />
      <button onClick={handleSignup}>SignUp</button>
    </div>
  );
};

export default OTPInput;
