from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Business
from app.forms.business_form import BusinessForm
from app.api.auth_routes import validation_errors_to_error_messages


business_routes = Blueprint('business',__name__)

# Get ALL BUSINESS
@business_routes.route('')
def get_all_businesses():
    all_businesses = [business.to_dict() for business in Business.query.all()]
    # all_businesses = {business.id :business.to_dict() for business in Business.query.all()}
    return {"business": all_businesses}

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

#CREATE A BUSINESS
@business_routes.route('', methods=['POST'])
def create_a_business():
    form = BusinessForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        new_business = Business()

        form.populate_obj(new_business)

        db.session.add(new_business)
        db.session.commit()

        return new_business.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

#UPDATE A BUSINESS
@business_routes.route('/<int:id>', methods=['PUT'])
def update_a_business(id):
    business_update = Business.query.get(id)
    if business_update is None:
        return {"message":"Business couldn't be found", "statusCode":404}

    form = BusinessForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data =form.data
        business_update.name = data["name"]
        business_update.email = data["email"]
        business_update.phone = data["phone"]
        business_update.description = data["description"]
        business_update.address = data["address"]
        business_update.nacityme = data["city"]
        business_update.state = data["state"]
        business_update.zipcode = data["zipcode"]
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
            }

    db.session.delete(business_needed)
    db.session.commit()
    return {
            "message": "Successfully deleted",
             "statusCode": 200
        }

# Current Users Businesses
