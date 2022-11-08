from flask import Blueprint, request
from app.models import db, Category, Business


category_routes = Blueprint('categories',__name__)


@category_routes.route('')
def get_all_categories():
    categories = Category.query.all()
    categories_lst = [cate.to_dict() for cate in categories]

    return {'categories': categories_lst}

@category_routes.route('/<int:id>', methods=["POST"])
def add_category(id):
    #query business with id then query all categories
    business_to_add = Business.query.get(id)
    all_categories = Category.query.all()

    bus_cate = business_to_add.cate_business

    data = request.get_json()
    cate_selected_names = data.values()


    for category in all_categories:
        for name in cate_selected_names:
            if name.upper() == category.name.upper():
                bus_cate.append(Category.query.get(category.id))
    db.session.commit()
    return {"category":[cate.to_dict() for cate in bus_cate]}
