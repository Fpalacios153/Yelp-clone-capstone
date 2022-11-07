from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired



class CategoryForm(FlaskForm):
    name = StringField("Name", validators=[DataRequired(message="Name is required")])
