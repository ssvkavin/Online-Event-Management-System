
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./index.css";

const Eventlist = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/events")
      .then((response) => setEvents(response.data))
      .catch((error) => console.error("Error fetching events:", error));
  }, []);

  const handleBook = (id, name) => {
    // Navigate to login/register page before booking
    navigate("/auth", { state: { eventId: id, eventName: name } });
  };

  return (
    <div>
      <h1>Available Events</h1>
      <div className="event-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img
              src={`${process.env.PUBLIC_URL}${event.image_url}`}
              alt={event.name}
              style={{ width: "100%", height: "auto" }}
            />
            <h2>{event.name}</h2>
            <p>{event.description}</p>
            <p>Price: {event.price}</p>
            <p>Food Included: {event.food_included ? "Yes" : "No"}</p>
            <button onClick={() => handleBook(event.id, event.name)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Eventlist;
