from flask import Blueprint, request
from flask_login import login_required, current_user
from app.forms.review_form import ReviewForm
from app.models import db, Business, Category
from app.forms.business_form import BusinessForm
from app.api.auth_routes import validation_errors_to_error_messages
from app.models.reviews import Review


business_routes = Blueprint('business',__name__)


# Get ALL BUSINESS
@login_required
@business_routes.route('')
def get_all_businesses():
    business_with_review_stats =[]
    businesses = Business.query.all()
    for business in businesses:
        business_dict = business.to_dict()
        if business.review:
            business_dict['reviews'] = [review.to_dict() for review in business.review]
            business_dict['reviewCount'] = len(business.review)
            # add round
            business_dict['reviewAverage'] =sum([review.rating for review in business.review])/ len(business.review)
        if business.cate_business:
            business_dict['categories']= [cate.to_dict() for cate in business.cate_business]

        business_with_review_stats.append(business_dict)

    # all_businesses = [business.to_dict() for business in Business.query.all()]
    # all_businesses = {business.id :business.to_dict() for business in Business.query.all()}

    return {"business": [busi for busi in business_with_review_stats]}

# GET DETAILS OF A BUSINESS
@business_routes.route("/<int:id>")
def get_details_of_one_business(id):
    one_business = Business.query.get(id)
    if one_business is None:
         return {
            "statusCode": 404,
            "message": "Business not found"
        }
    review = [review.to_dict() for review in one_business.review]
    return one_business.to_dict()
        # "reviews": review
        #  return {
        # "business" :one_business.to_dict(),
        # "reviews": review
        # }

# @business_routes.route("/<int:id>")
# def get_details_of_one_business(id):
#     one_business = Business.query.get(id)
#     if one_business is None:
#          return {
#             "statusCode": 404,
#             "message": "Business not found"
#         }
#     one_business_with_reviews = []
#     one_business_to_dict = one_business.to_dict()
#     if one_business.review:
#         one_business_to_dict['reviews'] = [review.to_dict() for review in one_business.review]
#         one_business_to_dict['reviewCount'] = len(one_business.review)
#         one_business_to_dict['reviewAverage'] = sum([review.rating for review in one_business.review])/ len(one_business.review)
#     one_business_with_reviews.append(one_business_to_dict)

#     return {"business": one_business_with_reviews}
#CREATE A BUSINESS
@business_routes.route('', methods=['POST'])
def create_a_business():
    form = BusinessForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        new_business = Business()

        form.populate_obj(new_business)
        # new_business['categories']= [cate.to_dict() for cate in new_business.cate_business]
        # new_business['reviews'] = [review.to_dict() for review in new_business.review]
        # new_business['reviewCount'] = len(new_business.review)
        #     # add round
        # new_business['reviewAverage'] =sum([review.rating for review in new_business.review])/ len(new_business.review)

        db.session.add(new_business)
        db.session.commit()

        return new_business.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

#UPDATE A BUSINESS
@business_routes.route('/<int:id>', methods=["PUT"])
def update_a_business(id):
    business_update = Business.query.get(id)
    if business_update is None:
        return {"message":"Business couldn't be found", "statusCode":404},404

    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data =form.data
        business_update.name = data["name"]
        business_update.email = data["email"]
        business_update.phone = data["phone"]
        business_update.description = data["description"]
        business_update.address = data["address"]
        business_update.city = data["city"]
        business_update.state = data["state"]
        business_update.zipcode = data["zipcode"]
        business_update.country = data["country"]
        business_update.image = data["image"]
        business_update.ownerId = data["ownerId"]

        db.session.commit()
        return business_update.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

#DELETE A BUSINESS
@business_routes.route('/<int:id>', methods=['DELETE'])
def delete_a_business(id):
    business_needed = Business.query.get(id)
    if business_needed is None:
        return {
            "message":"Business couldn't be found",
            "statusCode":404
            },404

    db.session.delete(business_needed)
    db.session.commit()
    return {
            "message": "Successfully deleted",
             "statusCode": 200
        }

# Current Users Businesses
# Create a review
@login_required
@business_routes.route('/<int:id>/review', methods=["POST"])
def create_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        # new_review = Review()
        # form.populate_obj(new_review)
        data = form.data
        new_review = Review(
            review= data['review'],
            rating = data['rating'],
            userId= data["userId"],
            businessId= id
        )

        db.session.add(new_review)
        db.session.commit()

        return new_review.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

# CATEGORY ROUTES
# get categories for one businesses


# @business_routes.route('/<int:id>/categories', methods=["POST"])
# def add_category(id):
#     #query business with id then query all categories
#     business_to_add = Business.query.get(id)
#     all_categories = Category.query.all()

#     bus_cate = business_to_add.cate_business

#     data = request.get_json()
#     cate_selected_names = data.values()

#     for category in all_categories:
#         for name in cate_selected_names:
#             if name.upper() == category.name.upper():
#                 bus_cate.append(Category.query.get(category.id))
#                 db.session.commit()
#     return business_to_add.to_dict()

@business_routes.route('/<int:id>/categories')
def get_one_businesses_categories(id):
    one_business = Business.query.get(id)
    category_lst = [x.to_dict() for x in one_business.cate_business]

    return {'categories':category_lst}

@business_routes.route('/<int:id>/categories/<int:cateId>', methods=["DELETE"])
def remove_category(id,cateId):
    business_to_add = Business.query.get(id)
    find_category_to_not_delete = [x for x in business_to_add.cate_business if x.id !=cateId]

    if len(find_category_to_not_delete)>=0:
        business_to_add.cate_business = find_category_to_not_delete
        db.session.commit()
        return {"message": "Category was successfully removed"}
    else:
        return {'Error':'Category not found'}
