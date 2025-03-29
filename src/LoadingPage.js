import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "./assets/evt3.jpg"; 
import "./LoadingPage.css"
const LoadingPage = () => {
    const navigate = useNavigate();

    return (
        <div
            className="loading-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="overlay">
                <h1 className="company-name">GO TODAY</h1>
                <button className="go-button" onClick={() => navigate("/events")}>Go</button>
            </div>
        </div>
    );
};

export default LoadingPage;
