from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField, TelField, TextAreaField
from wtforms.validators import DataRequired


class FlaskUserForm(FlaskForm):
    name = StringField('Имя', validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    number = TelField('Номер', validators=[DataRequired()])
    text = StringField('Комментарий', validators=[DataRequired()])
    submit = SubmitField('Отправить', render_kw={'class': 'send'})
