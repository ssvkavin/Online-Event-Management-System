from flask import Flask
from flask_cors import CORS
from config import Config
from models import db
from routes import event_bp

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
CORS(app, resources={r"/*":{"origins": "*"}})
#CORS(app)
#CORS(app,origins=["http://localhost:3000"])
app.register_blueprint(event_bp)

if __name__ == "_main_":
    with app.app_context():
        db.create_all()
    app.run(debug=True)