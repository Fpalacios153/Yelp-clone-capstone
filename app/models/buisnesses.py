from turtle import back
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


    #relationships
    reviews = db.relationship('Review', back_populates='business', cascade='all, delete-orphan')
    owners = db. relationship('User', back_populates='owners_business')

    def to_dict(self):
        return {
            "id":self.id,
            "name": self.name,
            "email":self.email,
            "phone":self.phone,
            "description":self.description,
            'address':self.address,
            "city": self.city,
            "state":self.state,
            'zipcode': self.zipcode,
            'country': self.country,
            "ownerId": self.ownerId
        }
