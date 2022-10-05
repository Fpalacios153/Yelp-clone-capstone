from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Email, ValidationError, Length

def is_email_unique():
    pass

class BusinessForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired(message="Name is required"),Length(max=50, message="Name must be less than 50 characters")])
    email = StringField("Email", validators=[DataRequired(message='Email is required')])
    phone = StringField("Email", validators=[DataRequired(message='Phone is required')])
    description = StringField("Description", validators=[DataRequired(message='Description is required'),Length(max=500, message=("Name must be less than 500 characters"))])
    address = StringField("Address", validators=[DataRequired(message='Address is required')])
    city = StringField("City", validators=[DataRequired(message='City is required')])
    state = StringField("State", validators=[DataRequired(message='State is required')])
    zipcode = StringField("Zipcode", validators=[DataRequired(message='Zipcode is required')])
    country = StringField("Country", validators=[DataRequired(message='Country is required')])
    image = StringField("Image", validators=[DataRequired('Image is required')])
    ownerId = IntegerField('Owner')
