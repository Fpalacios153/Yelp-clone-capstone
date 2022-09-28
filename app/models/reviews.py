from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(1000),nullable=False)
    rating = db.Column(db.Integer,nullable=False)
    userId =db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    businessId =db.Column(db.Integer, db.ForeignKey('businesses.id'), nullable=False)

    #relationships

    business = db.relationship('Buisness', back_populates='reviews')
    user = db.relationship('User', back_populates='users_reviews')


    def to_dict(self):
        return {
            "id": self.id,
            "review": self.review,
            "rating": self.rating,
            "userId":self.userId,
            "businessId": self.businessId
        }
