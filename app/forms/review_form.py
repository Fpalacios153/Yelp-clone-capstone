from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length


class ReviewForm(FlaskForm):

    review = StringField("Review", validators=[DataRequired(message="Review is required"), Length(max=1000, message='Review must be less than 1000 characters')])
    rating = IntegerField('Rating', validators=[DataRequired(message='Rating is required')])
    userId =IntegerField("User Id")
    businessId = IntegerField('Business Id')
