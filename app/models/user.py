from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .business import user_favorites


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    firstName = db.Column(db.String(50), nullable=False)
    lastName = db.Column(db.String(50), nullable=False)
    profilePic =db.Column(db.String)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    username = db.Column(db.String(40), nullable=False, unique=True)
    # phone = db.Column(db.String(10))

    #relationship
    owners_business =db.relationship('Business', back_populates='owners')
    users_reviews =db.relationship('Review', back_populates='user')

    favorite = db.relationship(
        "Business",
        secondary= user_favorites,
        back_populates='user_favs'
    )


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            "firstName": self.firstName,
            "lastName" : self.lastName,
            # "phone": self.phone,
            "profilePic": self.profilePic
        }
