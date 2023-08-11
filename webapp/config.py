import os

basedir = os.path.abspath(os.path.dirname(__file__))

SQLALCHEMY_DATABASE_URI = 'sqlite:///' + \
    os.path.join(basedir, '..', 'webapp.db')

SECRET_KEY = 'SsdjfnIDSMFIU2IN324KJ32NUHBD234523589'
