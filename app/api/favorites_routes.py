from flask import Blueprint
from app.models import db, Business
from flask_login import login_required, current_user


favorite_routes =Blueprint('favorite',__name__)


@favorite_routes.route('')
@login_required
def users_favorites():
    users_favs = current_user.favorite
    fav_list = [fav.to_dict() for fav in users_favs]
    print(fav_list)
    return {'favorites': fav_list}

@favorite_routes.route('/<int:id>', methods=["POST"])
@login_required
def add_favorite(id):
    users_favs = current_user.favorite
    business_to_add = Business.query.get(id)
    users_favs.append(business_to_add)

    db.session.commit()

    return business_to_add.to_dict()

@favorite_routes.route('/<int:id>', methods=["DELETE"])
@login_required
def remove_favorite(id):
    users_favs = current_user.favorite
    # business_to_add = Business.query.get(id)
    find_favorite_to_not_delete = [x for x in users_favs if x.id != id]
    if len(find_favorite_to_not_delete)>=0:
        current_user.favorite = find_favorite_to_not_delete
        db.session.commit()
        return {'message': 'Favorite was successfully removed'}
    else:
        return {'Error':'Business not found'}
