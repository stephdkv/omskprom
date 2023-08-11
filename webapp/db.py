from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class UserForm(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    email = db.Column(db.String, nullable=False)
    number = db.Column(db.Integer, nullable=False)
    text = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return ' Имя:  {}\
                 Email:  {}\
                 Номер тел.:  {}\
                 Комментарий:  {}'.format(self.name, self.email, self.number, self.text)
