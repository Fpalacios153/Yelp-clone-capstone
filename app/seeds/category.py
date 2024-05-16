from ..models import db, Category

def seed_category():

    categories = ['Burgers', 'Pizza', 'Italian']

    category_inputs = [Category(name=cate) for cate in categories]

    for category in category_inputs:
        db.session.add(category)
    db.session.commit()


def undo_category():
    db.session.execute('TRUNCATE categories RESTART IDENTITY CASCADE;')
    db.session.commit()
