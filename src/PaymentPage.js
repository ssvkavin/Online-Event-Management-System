import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PaymentPage.css"

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const navigate = useNavigate();

  const handlePayment = () => {
    if (paymentMethod === "cash") {
      alert("Payment Successful!");
      navigate("/");
    } else if (paymentMethod === "online") {
      navigate("/otp");
    }
  };

  return (
    <div className="payment-container">
      <h2>Select Payment Method</h2>
      <div className="button-group">
      <button onClick={() => setPaymentMethod("cash")}>Cash</button>
      <button onClick={() => setPaymentMethod("online")}>Online Payment</button>
      {paymentMethod && <button className="proceed-button" onClick={handlePayment}>Proceed</button>}
      </div>
    </div>
  );
};

export default PaymentPage;