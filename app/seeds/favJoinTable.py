from ..models import db, Business, User

def seed_join_tables():
    demo_user = User.query.all()

    business1 = Business.query.get(1)
    business2 = Business.query.get(2)

    # demo_user.favorite.extend(business1)
    # demo_user.favorite.extend(business2)
    business1.user_favs.extend(demo_user)
    business2.user_favs.extend(demo_user)

    db.session.commit()


def undo_join_tables():
    db.session.execute('TRUNCATE user_favorites RESTART IDENTITY CASCADE;')
    db.session.commit()
