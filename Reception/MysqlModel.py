from flask import Flask
import config
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
# 连接mysql数据库配置
app.config['SQLALCHEMY_DATABASE_URI'] = config.SQLALCHEMY_DATABASE_URL

app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)


class Admin(db.Model):
    __tablename__ = 'admins'
    id = db.Column(db.Integer, primary_key=True)
    account = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.String(500), unique=False, nullable=False)
    nickname = db.Column(db.String(50), unique=False, nullable=False)
    pic = db.Column(db.String(500), unique=False, nullable=False)
    state = db.Column(db.String(50), unique=False, nullable=False, default="显示")
    permissions =db.Column(db.String(50), unique=False, nullable=False)
    time = db.Column(db.TIMESTAMP(True), nullable=False, unique=False, server_default=db.text('NOW()'))

    def __repr__(self):
        return 'id=%r,account=%r,password=%r,nickname=%r,pic=%r,permissions=%r,time=%r,state=%r' %(self.id, self.account, self.password, self.nickname, self.pic, self.permissions, self.time,self.state)

class Article(db.Model):
    # 表名
    __tablename__ = 'articles'
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(500), unique=False, nullable=False)
    bfcontent = db.Column(db.TEXT,unique=False, nullable=False)
    content = db.Column(db.TEXT, unique=False,nullable=False)
    author = db.Column(db.String(50),unique=False, nullable=False)
    state = db.Column(db.String(20),unique=False, default="显示")
    time = db.Column(db.TIMESTAMP, nullable=False, unique=False, server_default=db.text('NOW()'))
    pictures = db.relationship('Picture', backref='Article')
    labels = db.relationship('Label', backref='Article',)
    comments = db.relationship('Comment', backref='Article', )
    # 对应repr(object)这个函数，返回一个可以用来表示对象的可打印字符串
    # '{"id":%r,"title":%r,"content":%r,"author":%r,"state":%r,"time":%r}' %(self.id, self.title, self.content, self.author, self.state, self.time.strftime('%Y-%m-%d %H:%M:%S'))
    def __repr__(self):
        return '"id"=%r,title=%r,content=%r,author=%r,state=%r,time=%r' %(self.id, self.title, self.content, self.author, self.state, self.time.strftime('%Y-%m-%d %H:%M:%S'))


class Picture(db.Model):
    __tablename__ = 'pictures'
    id = db.Column(db.Integer, primary_key=True)
    article_on = db.Column(db.Integer, db.ForeignKey('articles.id'))
    title = db.Column(db.String(50),unique=False, nullable=False)
    content = db.Column(db.String(500),unique=False, nullable=False)
    picture = db.Column(db.String(1000),unique=False, nullable=False)
    state = db.Column(db.String(20), unique=False, default="显示")
    time = db.Column(db.TIMESTAMP, unique=False, nullable=False,server_default=db.text('NOW()'))

    def __repr__(self):
        return '<Admin %r>' % self.title

class Label(db.Model):
    __tablename__ = 'labels'
    id = db.Column(db.Integer, primary_key=True)
    article_on = db.Column(db.Integer,db.ForeignKey('articles.id'))
    label = db.Column(db.String(20),unique=False, nullable=False)
    state = db.Column(db.String(20),unique=False, default="显示", nullable=False)
    time = db.Column(db.TIMESTAMP, nullable=False,unique=False,  server_default=db.text('NOW()'))

    def __repr__(self):
        return 'id=%r,article_on=%r,label=%r,state=%r,time=%r' %(self.id,self.article_on,self.label,self.state,self.time)

class Comment(db.Model):
    __tablename__ = 'comments'
    id = db.Column(db.Integer, primary_key=True)
    article_on = db.Column(db.Integer,db.ForeignKey('articles.id'))
    nickname = db.Column(db.String(100),unique=False)
    mailbox = db.Column(db.String(100),unique=False)
    content = db.Column(db.String(1000),unique=False)
    pic = db.Column(db.String(1000),unique=False)
    state = db.Column(db.String(20),unique=False, default="显示")
    time = db.Column(db.TIMESTAMP, nullable=False, unique=False, server_default=db.text('NOW()'))
    replys = db.relationship("Reply", backref='Comment')

    # def __repr__(self):
    #     return 'id=%r,nickname=%r,mailbox=%r,content=%r,pic=%r,time=%r' %(self.id, self.nickname, self.mailbox, self.content, self.pic, self.time)

class Reply(db.Model):
    __tablename__ = 'replys'
    id = db.Column(db.Integer, primary_key=True)
    comment_on = db.Column(db.Integer, db.ForeignKey('comments.id'))
    nickname = db.Column(db.String(100),unique=False)
    mailbox = db.Column(db.String(100),unique=False)
    content = db.Column(db.String(1000),unique=False)
    pic = db.Column(db.String(1000),unique=False)
    state = db.Column(db.String(20),unique=False, default="显示")
    time = db.Column(db.TIMESTAMP, nullable=False, unique=False, server_default=db.text('NOW()'))



db.create_all()

