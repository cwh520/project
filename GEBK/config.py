#endcoding:utf-8
import os

USERNAME = 'cwh'
PASSWORD = '616263'
HOST = '192.168.31.14'
RORT = '3306'
DATABASE = 'GRBK'

SQLALCHEMY_DATABASE_URL = "mysql+pymysql://{}:{}@{}:{}/{}".format(USERNAME,PASSWORD,HOST,RORT,DATABASE)

SECRET_KEY = os.urandom(24)