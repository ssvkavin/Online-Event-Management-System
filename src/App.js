/*import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingPage from "./LoadingPage";
import Eventlist from "./Eventlist";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoadingPage />} />
                <Route path="/events" element={<Eventlist />} />
            </Routes>
        </Router>
    );
}

export default App;*/
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