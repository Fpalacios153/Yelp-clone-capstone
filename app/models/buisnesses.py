from .db import db



class Buisness(db.Model):
    __tablename___ ='businesses'

    id = db.Column(db.Integer, primary_key=True)
    name =db.Column(db.String(50))
    email = db.Column(db.String(255), nullable=False, unique=True)
    phone = db.Column(db.String(10), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    address = db.Column(db.String(75), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    zipcode = db.Column(db.String(7), nullable=False)
    country = db.Column(db.String(75), nullable=False)
    ownerId = db.Column(db.Integer,db.ForeignKey('users.id'), nullable=False)
