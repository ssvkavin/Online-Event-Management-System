from flask import Blueprint, jsonify, request
from models import db, Event

event_bp = Blueprint("event_bp", __name__)

# Fetch all events
@event_bp.route("/events", methods=["GET"])
def get_events():
    events = Event.query.all()
    return jsonify([{
        "id": event.id,
        "name": event.name,
        "description": event.description,
        "image_url": event.image_url,
        "price": event.price,
        "food_included": event.food_included
    } for event in events])

# Book an event
@event_bp.route("/book/<int:event_id>", methods=["POST"])
def book_event(event_id):
    event = Event.query.get(event_id)
    if not event:
        return jsonify({"message": "Event not found"}), 404
    return jsonify({"message": f"You have successfully booked {event.name}"})


