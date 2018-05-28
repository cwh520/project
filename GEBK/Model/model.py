# -*- coding: UTF-8 -*-
from Model.MysqlTool import db
from Model.MysqModel import Admin, Article, Picture, Label, Comment, Reply
from hashlib import md5
from flask import Flask,jsonify, g
import json
import requests

# 管理员模型
class AdminModel(object):
    # 用户登录
    def login(self, account, password):
        password = self.create_md5(password)
        print(password)
        if account and password:
            datas = Admin.query.filter_by(account=account, password=password).all()
            for item in datas:
                data = {
                    "id": item.id,
                    "account": item.account,
                    "nickname": item.nickname,
                    "pic": item.pic,
                    "permissions": item.permissions,
                    "time": item.time,
                    "state":item.state
                }
            if len(datas) != 0:
               return data



    # 获取所有管理员
    def GetAll(self):
        datas = Admin.query.all()
        da = []
        for item in datas:
            data = [
                item.id,
                item.account,
                item.password,
                item.nickname,
                item.pic,
                item.permissions,
                item.time.strftime('%Y-%m-%d %H:%M:%S'),
                item.state,
                item.account
            ]
            da.append(data)
        return da


    # 判断用户名
    def chake(self, account):
        datas = Admin.query.filter(Admin.account == account).all()
        if len(datas) == 0:
            return jsonify({
                "code": 200,
                "content": "可以插入"
            })
        else:
            return jsonify({
                "code": 400,
                "content": "用户名已经存在"
            })

    # 添加管理员
    def AddAdmin(self, account, password, nickname, permissions, pic):
        if account and password and nickname and permissions and pic:
            password = self.create_md5(password)
            sql = Admin(account=account, password=password, nickname=nickname, pic=pic, permissions=permissions)
            db.session.add(sql)
            db.session.commit()
            if sql.id != 0:
                return jsonify({
                    "code": 200,
                    "content": "插入成功"
                })
            else:
                return jsonify({
                    "code": 500,
                    "content": "插入失败"
                })
        else:
            return jsonify({
                "code": 400,
                "content": "你传入数据不完整"
            })

    # 修改密码
    def Updatepwd(self,id , password, nickname, permissions, pic):

            result = Admin.query.filter(Admin.id== id).first()
            old_password = result.password
            old_nickname = result.nickname
            old_permissions = result.permissions
            old_pic = result.pic
            if old_password == password:
                result.nickname = nickname
                # print(permissions)
                if permissions != None:
                   result.permissions = permissions
            else:
                password = self.create_md5(password)
                result.password = password
                result.nickname = nickname
                if permissions != None:
                   result.permissions = permissions
            db.session.commit()
            return jsonify({
                "code":200,
                "content":"编辑成功"
            })




    # 修改转态
    def Updatestate(self,id, state):
        if id and state:
            result = Admin.query.filter(Admin.id == id).first()
            old_state = result.state
            result.state = state
            db.session.commit()
            if result.state == state:
                return jsonify({
                    "code": 200,
                    "content": "修改成功"
                })
            else:
                return jsonify({
                    "code": 500,
                    "content": "修改失败"
                })

        else:
            return jsonify({
                "code": 400,
                "content": "参数不完整"
            })



    # md5 加密密码 salt 盐值
    def create_md5(self,pwd, salt="chenwenhao250"):
        md5_obj = md5()
        password = pwd + salt
        md5_obj.update(password.encode("utf8"))
        return md5_obj.hexdigest()




# 文章模型
class ArticleModel(object):
    # 获取所有文章
    def GetAll(self):
        datas = Article.query.all()
        da =[]
        for item in datas:
            data = [
                item.id,
                item.title,
                item.content,
                item.author,
                item.state,
                item.time.strftime('%Y-%m-%d %H:%M:%S'),
            ]
            da.append(data)
        return da

    # 添加文章
    def Addarticles(self,title, bfcontent, content, author):
        if title and bfcontent and content and author:
            sql = Article(title=title,bfcontent=bfcontent, content=content, author=author)
            db.session.add(sql)
            db.session.commit()
            if sql.id != 0:
                return jsonify({
                    "code": 200,
                    "content": "插入成功"
                })
            else:
                return jsonify({
                    "code": 500,
                    "content": "插入失败"
                })

        else:
            return jsonify({
                "code": 400,
                "content": "参数不完整"
            })

    # 编辑文章
    def editarticle(self, id, title, bfcontent, content, author):
        result = Article.query.filter(Article.id == id).first()
        old_title = result.title
        old_bfcontent = result.bfcontent
        old_content = result.content
        old_author = result.author
        result.title = title
        result.bfcontent = bfcontent
        result.content = content
        result.author = author
        db.session.commit()
        if result.title == title or result.bfcontent == bfcontent or result.content == content or result.author == author:
            return jsonify({
                "code": 200,
                "content": "编辑成功"
            })
        return jsonify({
                "code": 500,
                "content": "插入成功"
            })

    # 修改文章状态
    def updatestate(self, id, state):
        if id and state:
            result = Article.query.filter(Article.id == id).first()
            old_state = result.state
            result.state = state
            db.session.commit()
            if result.state == state:
                return jsonify({
                    "code": 200,
                    "content": "修改成功"
                })
            else:
                return jsonify({
                    "code": 500,
                    "content": "修改失败"
                })

        else:
            return jsonify({
                "code": 400,
                "content": "参数不完整"
            })

# 标签模型
class LabelModel(object):

    # 获取所有标签
    def GetAll(self):
        datas = Label.query.all()
        da =[]
        for item in datas:
            data = [
                item.id,
                self.Gettitle(item.article_on),
                item.label,
                item.state,
                item.time.strftime('%Y-%m-%d %H:%M:%S'),
                item.article_on
            ]
            da.append(data)
        return da

    # 根据文章id获取文章标题
    def Gettitle(self, ids):
        datas = Article.query.filter_by(id=ids).all()
        for item in datas:
            data = item.title
        return data

    # 添加标签
    def addlabel(self, article, label):
        if article and label:
            sql = Label(article_on=article, label=label)
            db.session.add(sql)
            db.session.commit()
            if sql.id != 0:
                return jsonify({
                    "code": 200,
                    "content": "插入成功"
                })
            else:
                return jsonify({
                    "code": 500,
                    "content": "插入失败"
                })
        else:
            return jsonify({
                "code": 400,
                "content": "参数不完整"
            })

    # 修改标签状态
    def Updatestate(self, state, id):
        if id and state:
            result = Label.query.filter(Label.id == id).first()
            old_state = result.state
            result.state = state
            db.session.commit()
            if result.state == state:
                return jsonify({
                    "code": 200,
                    "content":"修改成功"
                })
            else:
                return jsonify({
                    "code": 500,
                    "content": "修改失败"
                })

        else:
            return jsonify({
                "code": 400,
                "content": "参数不完整"
            })
    # 修改标签
    def Update(self,id ,article, label):
        if id and article and label:
            result = Label.query.filter(Label.id == id).first()
            old_article = result.article_on
            old_label = result.label
            result.article_on = article
            result.label = label
            db.session.commit()
            if result.article_on == article or result.label == label:
                return jsonify({
                    "code": 200,
                    "content": "修改成功"
                })
            else:
                return jsonify({
                    "code": 500,
                    "content": "修改失败"
                })

        else:
            return jsonify({
                "code": 400,
                "content": "参数不完整"
            })

# 留言模型
class CommentModel(object):
    # 获取全部留言
    def GetAll(self):
        datas = Comment.query.all()
        da = []
        for item in datas:
            data = [
                item.id,
                LabelModel().Gettitle(item.article_on),
                item.nickname,
                item.mailbox,
                item.content,
                item.pic,
                item.state,
                item.time.strftime('%Y-%m-%d %H:%M:%S'),
                item.article_on
            ]
            da.append(data)
        return da

    # 修改状态
    def Updatestate(self, state, id):
        if id and state:
            result = Comment.query.filter(Comment.id == id).first()
            old_state = result.state
            result.state = state
            db.session.commit()
            if result.state == state:
                return jsonify({
                    "code": 200,
                    "content":"修改成功"
                })
            else:
                return jsonify({
                    "code": 500,
                    "content": "修改失败"
                })

        else:
            return jsonify({
                "code": 400,
                "content": "参数不完整"
            })

class ReplyMOdel(object):
    # 获取留言的全部留言
    def GeReply(self, id):
        da = Comment.query.filter(Comment.id == id).all()
        commit = []
        for i in da:
            dat = {
                "id": i.id,
                "title": LabelModel().Gettitle(i.article_on),
                "nickname": i.nickname,
                "mailbox": i.mailbox,
                "content": i.content,
                "pic": i.pic,
                "state": i.state,
                "time": i.time.strftime('%Y-%m-%d %H:%M:%S')
            }
            commit.append(dat)
        datas = Reply.query.filter(Reply.comment_on == id).all()
        reply = []
        for item in datas:
            dat = {
                "id": item.id,
                "comment_on": item.comment_on,
                "nickname": item.nickname,
                "mailbox": item.mailbox,
                "content": item.content,
                "pic": item.pic,
                "state": item.state,
                "time": item.time.strftime('%Y-%m-%d %H:%M:%S')
            }
            reply.append(dat)
        return jsonify({
            "commits": commit,
            "replys": reply
        })








