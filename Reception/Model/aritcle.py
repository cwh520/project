import MysqlModel
from MysqlModel import db
from flask import g,jsonify,json
from flask_sqlalchemy import BaseQuery
from sqlalchemy import func



model = MysqlModel
class ArticleModel(object):
    # 获取所有的所有的文章

    def GetAll(self,page_index=1,page_size=2): #.paginate(int(page_index), int(page_size),False)0
        article = model.Article.query.filter(model.Article.state == "显示").order_by(model.Article.time.asc()).paginate(int(page_index), int(page_size),False)
        Data = []
        for item in article.items:
            data = {
                "id": item.id,
                "title": item.title,
                "content": item.content,
                "author": item.author,
                "state": item.state,
                "time": item.time.strftime('%Y-%m-%d %H:%M:%S'),
                "bfcontent": item.bfcontent[:180]+'………',
                "label":self.Getalllable(item.id),
                "comment":self.Countcomment(item.id)
            }
            Data.append(data)
        return Data


    def Countarticle(self, page_size=2):
        article = model.Article.query.filter(model.Article.state == "显示").count()
        page_index = article // page_size + 1  # 所有文章数除以每页显示数+1
        return page_index

     # 统计所有留言

    def Countcomment(self, id):
        data = db.session.query(func.count(model.Comment.content)).filter(model.Comment.article_on == id).first()
        return data[0]



            # 获取所有的标签
    def Getalllable(self,id):
         data = model.Label.query.filter(model.Label.state == "显示", model.Label.article_on == id).all()
         da = []
         for item in data:
             da.append(item.label)
         label = "，".join(da)
         return label
    # 获取留言及回复并吧数据发送到前台
    def Getcomment(self,id):
        if id:
            data = model.Comment.query.filter(model.Comment.state == "显示", model.Comment.article_on == id).all()
            g.html = ''
            for item in data:
                html = '<div class="comment">'
                html += '<img src="'+item.pic+'" alt="img" width="100" height="100">'\
                        '<div class="text">'\
                        '<div class="name">' + item.nickname + ' <a class="reply" abc="'+str(item.id)+'" href="#">回 复</a></div>'\
                        '<div class="date">' + item.time.strftime('%Y-%m-%d %H:%M:%S') + '</div> '+item.content+''\
                        '</div>' \
                        '<div class="clear"></div>'
                for i in self.Getreply(item.id):
                    html += '<div class="comment sub">'\
                            ' <img src="'+i.pic+'" alt="img" width="100" height="100">'\
                            ' <div class="text">'\
                            ' <div class="name">'+i.nickname+' </div>'\
                            '<div class="date">'+i.time.strftime('%Y-%m-%d %H:%M:%S')+'</div>'+i.content+''\
                            '</div>'\
                            ' <div class="clear"></div>'\
                            ' </div>'\
                            ' <div class="clear"></div>'\

                html += '</div>'
                g.html += html
            print(g.html)
            return jsonify({
                "code":200,
                "content":g.html

            })
        else:jsonify({
            "code":400,
            "content":"参数不完整"
        })
    # 获取留言回复
    def Getreply(self,id):
        data = model.Reply.query.filter_by(comment_on =id).all()
        return data
    # 添加留言
    def Addcomment(self, article_on, nickname, mailbox, content):
        sql = model.Comment(article_on=article_on,nickname=nickname,mailbox=mailbox,content=content,pic="../static/Upload/user.png")
        db.session.add(sql)
        db.session.commit()
        # print(sql)
        data = {"id": sql.id, "nickname": sql.nickname, "time": sql.time.strftime('%Y-%m-%d %H:%M:%S'), "content": sql.content, "pic": sql.pic}
        if sql.id == "":
            return jsonify({
                "code": 500,
                "content": "error"
            })
        return jsonify({
            "code": 200,
            "content": data
        })

    # 添加留言回复
    def Addreply(self, comment_on, nickname, mailbox, content):
        if comment_on and nickname and mailbox and content:
            sql = model.Reply(comment_on=comment_on, nickname=nickname, mailbox=mailbox, content=content, pic="../static/Upload/user.png")
            db.session.add(sql)
            db.session.commit()
            # print(sql)
            data = {"id": sql.id, "nickname": sql.nickname, "time": sql.time.strftime('%Y-%m-%d %H:%M:%S'),
                    "content": sql.content, "pic": sql.pic}
            if sql.id == "":
                return jsonify({
                    "code": 500,
                    "content": "error"
                })
            return jsonify({
                "code": 200,
                "content": data
            })
        return jsonify({
            "code":400,
            "content":"传入参数不完整"
        })













