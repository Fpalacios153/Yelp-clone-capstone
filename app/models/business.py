from .db import db, environment, SCHEMA, add_prefix_for_prod
# from .categories import business_categories

# Join table

user_favorites = db.Table(
    'user_favorites',
    db.Model.metadata,
    db.Column('users', db.Integer,db.ForeignKey(add_prefix_for_prod('users.id'), primary_key=True)),
    db.Column('businesstable', db.Integer,db.ForeignKey(add_prefix_for_prod('businesstable.id'), primary_key=True)),
    # db.Column('favorites', db.Interger,db.ForeignKey('favorites.id', primary_key=True))
)
if environment == "production":
    user_favorites.schema = SCHEMA

business_categories = db.Table(
    'business_categories',
    db.Model.metadata,
    db.Column('businesstable', db.Integer,db.ForeignKey(add_prefix_for_prod('businesstable.id'), primary_key=True)),
    db.Column('categories', db.Integer,db.ForeignKey(add_prefix_for_prod('categories.id'), primary_key=True)),
)
if environment == "production":
    business_categories.schema = SCHEMA

class Business(db.Model):
    __tablename__ = 'businesstable'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name =db.Column(db.String(50))
    email = db.Column(db.String(255), nullable=False, unique=True)
    phone = db.Column(db.String(), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    address = db.Column(db.String(75), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    zipcode = db.Column(db.String(7), nullable=False)
    country = db.Column(db.String(75), nullable=False)
    image = db.Column(db.String(), nullable=False)
    ownerId = db.Column(db.Integer,db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)


    #relationships
    owners = db.relationship('User', back_populates='owners_business')
    review = db.relationship('Review', back_populates='business', cascade='all, delete-orphan')


 # relationships
    user_favs = db.relationship(
        "User",
        secondary= user_favorites,
        back_populates='favorite'
    )

    cate_business = db.relationship(
        "Category",
        secondary =business_categories,
        back_populates="business_cate"
)
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
            'image': self.image,
            "ownerId": self.ownerId
        }
