import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css"

const AuthPage = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    navigate("/payment"); // Redirect to payment page after login/register
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        <form onSubmit={handleAuthSuccess}>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          {isRegistering && <input type="text" placeholder="Full Name" required />}
          <button type="submit">{isRegistering ? "Register" : "Login"}</button>
        </form>
        <p onClick={() => setIsRegistering(!isRegistering)} className="toggle-auth">
          {isRegistering ? "Already have an account? Login" : "New user? Register"}
        </p>
      </div>
    </div >
  
  );
};

export default AuthPage;