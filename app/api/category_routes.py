from flask import Blueprint
from app.models import db, Category


category_routes = Blueprint('categories',__name__)


@category_routes.route('')
def get_all_categories():
    categories = Category.query.all()
    categories_lst = [cate.to_dict() for cate in categories]

    return {'categories': categories_lst}
