from ..models import db, Category

categories = ['Burgers', 'Pizza', 'Italian', 'Chinese', 'Japanese', 'Mexican', 'Thai', "Takeout", "Delivery"]
def seed_category():
    Burgers = Category(
        name="Burgers"
    )
    Pizza = Category(
        name="Pizza"
    )
    Italian = Category(
        name="Italian"
    )
    Chinese = Category(
        name="Chinese"
    )
    Japanese = Category(
        name="Japanese"
    )
    Mexican = Category(
        name="Mexican"
    )
    Thai = Category(
        name="Thai"
    )
    Takeout = Category(
        name="Takeout"
    )
    Delivery = Category(
        name="Delivery"
    )



    # category_inputs = [Category(name=cate) for cate in categories]

    # for category in category_inputs:
    db.session.add(Burgers)
    db.session.add(Pizza)
    db.session.add(Italian)
    db.session.add(Chinese)
    db.session.add(Japanese)
    db.session.add(Mexican)
    db.session.add(Thai)
    db.session.add(Takeout)
    db.session.add(Delivery)
    db.session.commit()


def undo_category():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
