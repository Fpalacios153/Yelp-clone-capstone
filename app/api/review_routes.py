from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Review
# from app.forms. import
from app.api.auth_routes import validation_errors_to_error_messages


review_routes = Blueprint('review',__name__)

#GET ALL REVIEWS
@review_routes.route('')
def get_all_reviews():
    reviews = [review.to_dict() for review in Review.query.all()]
    # reviews = {review.id: review.to_dict() for review in Review.query.all()}

    return {"reviews": reviews}
