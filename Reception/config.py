import os
USERNAME = 'cwh'
PASSWORD = '616263'
HOST = '118.25.70.84'
RORT = '3306'
DATABASE = 'GRBK'

SQLALCHEMY_DATABASE_URL = "mysql+pymysql://{}:{}@{}:{}/{}?charset=utf8".format(USERNAME,PASSWORD,HOST,RORT,DATABASE)

config = {
    'CACHE_TYPE': 'redis',
    'CACHE_REDIS_HOST': '127.0.0.1',
    'CACHE_REDIS_PORT': 6379,
    'CACHE_REDIS_DB': '',
    'CACHE_REDIS_PASSWORD': ''
 }



