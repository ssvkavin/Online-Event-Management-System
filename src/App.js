
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Eventlist from "./Eventlist";
import AuthPage from "./AuthPage";
import PaymentPage from "./PaymentPage";
import OtpPage from "./OtpPage";
import LoadingPage from "./LoadingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/events" element={<Eventlist />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/otp" element={<OtpPage />} />
      </Routes>
    </Router>
  );
}

export default App;
