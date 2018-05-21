#endcoding:utf-8
import os

USERNAME = 'root'
PASSWORD = '616263'
HOST = '127.0.0.1'
RORT = '3306'
DATABASE = 'GRBK'

SQLALCHEMY_DATABASE_URL = "mysql+pymysql://{}:{}@{}:{}/{}".format(USERNAME,PASSWORD,HOST,RORT,DATABASE)

SECRET_KEY = os.urandom(24)