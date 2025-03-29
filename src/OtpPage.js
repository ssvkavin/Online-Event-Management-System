import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OtpPage.css"

const OtpPage = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null); // Store generated OTP
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const sendOtp = () => {
    if (mobile.length === 10) {
      const randomOtp = Math.floor(1000 + Math.random() * 9000); // Generate 4-digit OTP
      setGeneratedOtp(randomOtp);
      setOtpSent(true);
      alert(`OTP sent to ${mobile}: ${randomOtp}`); // Simulate OTP sending
    } else {
      alert("Enter a valid 10-digit mobile number");
    }
  };

  const verifyOtp = () => {
    if (otp === generatedOtp.toString()) {
      alert("Payment Successful!");
      navigate("/");
    } else {
      alert("Invalid OTP");
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-box">
      {!otpSent ? (
        <>
          <h2>Enter Mobile Number</h2>
          <input
            type="text"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter mobile number"
          />
          <button onClick={sendOtp}>Send OTP</button>
        </>
      ) : (
        <>
          <h2>Enter OTP</h2>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
          />
          <button onClick={verifyOtp}>Verify OTP</button>
        </>
      )}
      </div>
    </div>
  );
};

export default OtpPage;