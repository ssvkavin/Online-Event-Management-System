import os

DATABASE_URL = "postgresql://postgres:kavin17@localhost:5432/event_db"

class Config:
    SQLALCHEMY_DATABASE_URI = DATABASE_URL
    SQLALCHEMY_TRACK_MODIFICATIONS = False
