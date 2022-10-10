from app.models import business
from ..models import db, Review


def seed_reviews():
    review1 = Review(
        review= "This place was so bad, I'm never coming back",
        rating = 1,
        userId = 2,
        businessId =1

    )
    review1_2 = Review(
        review= "Great pastries! I enjoy taking the blueberry and raspberries cake to my job they love it",
        rating = 5,
        userId = 4,
        businessId =1

    )
    review1_3 = Review(
        review= "The food here was so good, definitely coming back for more.",
        rating = 4,
        userId = 5,
        businessId =1

    )
    review2 = Review(
        review= "This place was so amazing, The food was so good",
        rating = 5,
        userId = 1,
        businessId =2

    )
    review2_2 = Review(
        review= "We had the classic which is a burger cooked to  perfection with lettuce tomato cheese and  bacon. I got my burger well done and it was amazing.",
        rating = 4,
        userId = 3,
        businessId =2
    )
    review2_3 = Review(
        review= "I tried their 1/2 cheeseburger And fries says they had participate in the taste of runway this year! They're cheeseburger with fries were very delicious can't go wrong with the classics! They also had dipping sauce such as truffle and chipotle yumm!!!",
        rating = 4,
        userId = 5,
        businessId =2
    )
    review3_1= Review(
        review= "This place was so bad, I'm never coming back",
        rating = 1,
        userId = 2,
        businessId =3

    )
    review3 = Review(
        review= "Average at best.  This place isn't nearly as good as I had hoped.For starters, the service is terrible.Sausages are like $10 each and they aren't anything special IMO.",
        rating = 3,
        userId = 1,
        businessId =3

    )
    review5 = Review(
        review= "I'm never coming back, The food took forever and it was cold when it finally arrived",
        rating = 1,
        userId = 2,
        businessId =4
    )
    review5 = Review(
        review= "Great service! Yummy ramen! Would definitely recommend to all my friends! If I could give 6 stars I would.",
        rating = 5,
        userId = 5,
        businessId =4
    )
    review6 = Review(
        review= "Great service. Awesome hospitality . Amazing pizza !! Definitely would recommend.  Will be back.",
        rating = 5,
        userId = 3,
        businessId =5
    )
    review7 = Review(
        review= "Great food. Amazing drinks. Really nice staff. Fun ambiance. Super cute for Instagram pics. Great reggaeton music. The one downside is we still waited 20 min for our table even with a reservation. I will definitely be back though!!! Loved the vibes!!",
        rating = 4,
        userId = 3,
        businessId =6
    )


    db.session.add(review1)
    db.session.add(review1_2)
    db.session.add(review1_3)
    db.session.add(review2)
    db.session.add(review2_2)
    db.session.add(review2_3)
    db.session.add(review3)
    db.session.add(review3_1)
    db.session.add(review5)
    db.session.add(review6)
    db.session.add(review7)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
