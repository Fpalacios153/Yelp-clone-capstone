from flask import Blueprint, request
from flask_login import login_required, current_user
from app.forms.review_form import ReviewForm
from app.models import db, Review, Business
# from app.forms. import
from app.api.auth_routes import validation_errors_to_error_messages


review_routes = Blueprint('review',__name__)

#GET ALL REVIEWS
@review_routes.route('')
def get_all_reviews():
    review_with_users = []
    review_list = Review.query.all()

    for review in review_list:
        review_dict = review.to_dict()
        review_dict['user']= review.user.to_dict()
        review_with_users.append(review_dict)

    return {"reviews": [review for review in review_with_users]}

#Get DETAILS OF ON REVIEW
@review_routes.route('/<int:id>')
def get_one_review(id):
    review = Review.query.get(id)
    return review.to_dict()

#GET REVIEWS FROM A BUISNESS
@review_routes.route("/business/<int:id>")
def get_all_from_specifiy_buisness(id):
    theBusiness= Business.query.get(id)
    # come back to this to add user info
    # review =[]
    # for review in theBusiness:
    #     review_dict = review.to_dict()
    #     review_dict['user']= review.user.to_dict()
    #     review.append(review_dict)

    review = [review.to_dict() for review in theBusiness.review]
    return {"review": review}


# EDIT A REVIEW
@review_routes.route('/<int:id>', methods=["PUT"])
def edit_review(id):
    review_to_update = Review.query.get(id)
    if review_to_update is None:
        return {"message":"Review couldn't be found", "statusCode":404},404

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        data =form.data
        review_to_update.review = data['review']
        review_to_update.rating = data['rating']
        review_to_update.userId = data['userId']
        review_to_update.businessId = data['businessId']

        db.session.commit()
        return review_to_update.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401



#DELETE A REVIEW

@review_routes.route('/<int:id>', methods=["DELETE"])
def delete_review(id):
    review_to_delete = Review.query.get(id)
    if review_to_delete is None:
        return{
            "message":"Review couldn't be found",
            "statusCode":404
        },404
    db.session.delete(review_to_delete)
    db.session.commit()
    return {
        "message": "Successfully deleted",
        "statusCode": 200
        }




@review_routes.route('/user')
def get_users_reviews():
    userId = current_user
    return 'aooles'
