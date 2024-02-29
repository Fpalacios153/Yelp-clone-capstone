from .db import db, environment, SCHEMA, add_prefix_for_prod

class Review(db.Model):
    __tablename__ = 'reviews'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    review = db.Column(db.String(1000),nullable=False)
    rating = db.Column(db.Integer,nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    businessId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('businesstable.id')), nullable=False)

    #relationships

    user = db.relationship('User', back_populates='users_reviews')
    business = db.relationship('Business', back_populates='review')


    def to_dict(self):
        return {
            "id": self.id,
            "review": self.review,
            "rating": self.rating,
            "userId":self.userId,
            "businessId": self.businessId
        }
