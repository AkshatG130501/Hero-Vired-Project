import React, { useEffect, useState } from 'react';

const OTPInput = () => {
  const [otp, setOtp] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if(isCompleted) {
      // send otp to backend
      // check if otp if correct
      // if correct -> signin the user
      // else -> return a message to re-enter otp & popup

    }
  }, [isCompleted])


  return (
    <div>
      <h2>Enter OTP</h2>
      <input type="text" maxLength="4" value={otp} onChange={(e) => setOtp(e.target.value)} />
    </div>
  );
};

export default OTPInput;
