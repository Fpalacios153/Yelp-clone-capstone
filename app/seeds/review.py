from app.models import business
from ..models import db, Review


def seed_reviews():
    review1 = Review(
        review= "This place was so bad, I'm never coming back",
        rating = 1,
        userId = 1,
        businessId =1

    )
    review2 = Review(
        review= "This place was so amazing, The food was so good",
        rating = 5,
        userId = 2,
        businessId =2

    )
    review3 = Review(
        review= "This place was so bad, I'm never coming back",
        rating = 1,
        userId = 3,
        businessId =3

    )
    review4 = Review(
        review= "The food here was so good, definitely coming back for more.",
        rating = 4,
        userId = 1,
        businessId =2

    )
    review5 = Review(
        review= "I'm never coming back, The food took forever and it was cold when it finally arrived",
        rating = 1,
        userId = 2,
        businessId =4

    )
    review6 = Review(
        review= "Great service. Awesome hospitality . Amazing pizza !! Definitely would recommend.  Will be back.",
        rating = 5,
        userId = 3,
        businessId =5

    )

    db.session.add(review1)
    db.session.add(review2)
    db.session.add(review3)
    db.session.add(review4)
    db.session.add(review5)
    db.session.add(review6)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
