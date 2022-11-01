# from .db import db


# # Join table

# user_favorites = db.Table(
#     'user_favorites',
#     db.Model.metadata,
#     db.Column('users', db.Interger,db.ForeignKey('users.id', primary_key=True)),
#     db.Column('businesstable', db.Interger,db.ForeignKey('businesstable.id', primary_key=True)),
#     # db.Column('favorites', db.Interger,db.ForeignKey('favorites.id', primary_key=True))
# )


# class Favorite(db.Model):
#     __tablename__ = "favorites"

#     id = db.Column(db.Integer, primary_key=True)
#     businessId = db.Column(db.Integer, db.ForeignKey('businesstable.id'), nullable=False)

# # relationships
#     user_favs = db.relationship(
#         "User",
#         secondary= user_favorites,
#         back_populates='favorite'
#     )


# def to_dict(self):
#     return{
#         "id":self.id,
#         "businessId":self.businessId
#     }
