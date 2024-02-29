from .db import db, environment, SCHEMA, add_prefix_for_prod
from .business import business_categories

##Join table for categories and businesses

# business_categories = db.Table(
#     'business_categories',
#     db.Model.metadata,
#     db.Column('businesstable', db.Integer,db.ForeignKey('businesstable.id', primary_key=True)),
#     db.Column('categories', db.Integer,db.ForeignKey('categories.id', primary_key=True)),
# )

class Category(db.Model):
    __tablename__ ='categories'
    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))

#relationships

    business_cate = db.relationship(
        "Business",
        secondary = business_categories,
        back_populates="cate_business"
)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,

        }
