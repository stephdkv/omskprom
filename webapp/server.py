from flask import Flask, render_template
from form import FlaskUserForm
from db import db
from db import UserForm
from send_mail import sendMail


def create_app():

    app = Flask(__name__)
    app.config.from_pyfile('config.py')
    db.init_app(app)

    @app.route("/")
    def hello_world():
        form = FlaskUserForm()
        return render_template('index.html', form=form)

    @app.route("/process-submit", methods=['POST'])
    def process_submit():
        form = FlaskUserForm()
        if form.validate_on_submit():
            new_submit_info = UserForm(
                name=form.name.data, email=form.email.data, number=form.number.data, text=form.text.data)
            db.session.add(new_submit_info)
            db.session.commit()

            sendMail(new_submit_info)

        return render_template('index.html', form=form)

    return app
