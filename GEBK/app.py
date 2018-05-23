from flask import Flask,render_template,request,jsonify, url_for, session,redirect, g, make_response
from Model.model import AdminModel, ArticleModel, LabelModel, CommentModel
from uploader import Uploader
from datetime import timedelta
import decorator
import config
import os
import re
import json





app = Flask(__name__)
app.config.from_object(config)
app.permanent_session_lifetime = timedelta(minutes=30)




@app.route('/')
@decorator.login_required
# 首页
def index():
    return render_template("index.html", user=session.get('user_name'))


# 注销登录
@app.route('/logout')
def logout():
    session.clear()
    return redirect(url_for("Login"))



@app.route('/login',methods=['GET', 'POST'])

def Login():
    # 登录页面
    if request.method == "GET":
        return render_template("Login.html")
    # 登录功能实现
    if request.method == "POST":
        account = request.form["account"]
        password = request.form["password"]
        data = AdminModel().login(account,password)
        if data != None:
            if data['state'] == "显示":
                session['user_id'] = data['id']
                session['user_name'] = data["nickname"]
                session['permissions'] = data["permissions"]
                session['account'] = data["account"]
                session['nickname'] = data["nickname"]
                return redirect(url_for("index"))
            else:
                return render_template("Login.html", error="layer.msg('您已经没有权限进入本系统')",users=account)
        else:
            return render_template("Login.html", error="layer.msg('密码或用户名错误')",users=account)





@app.route('/admin',methods=['GET', 'POST', 'PUT', 'DELETE'])
@decorator.login_required
def admin():
    # 管理员页面
    if request.method == "GET":
        if session.get('permissions') == "站长":
            return render_template("zhadmin.html", user = session.get('user_name'), name=session.get("account"))
        else:
            return render_template("admin.html", user = session.get('user_name'), name=session.get("account"))
    if request.method == "POST":
        account = request.json.get("account")
        password = request.json.get("cfpwd")
        nickname = request.json.get("nickname")
        permissions = request.json.get("permissions")
        pic = "../static/Upload/admin.png"
        data = AdminModel().AddAdmin(account, password, nickname, permissions, pic)
        return data

    if request.method == "PUT":
        id = request.json.get("id")
        state = request.json.get("state")
        data = AdminModel().Updatestate(id,state)
        return data
    if request.method == "DELETE":
        pass

@app.route('/getadmin', methods=['GET', 'POST', 'PUT', 'DELETE'])
@decorator.login_required
def getadmin():
    # 获取所有管理员
    if request.method == "GET":
        data = AdminModel().GetAll()
        return jsonify({"data": data})
    if request.method == "POST":
        account = request.json.get('account')
        data = AdminModel().chake(account)
        return data
    if request.method == "PUT":
        id = request.json.get("id")
        password = request.json.get("cfpwd")
        nickname = request.json.get("nickname")
        permissions = request.json.get("permissions")
        pic = "../static/Upload/admin.png"
        data = AdminModel().Updatepwd(id, password, nickname, permissions, pic)
        return data
    if request.method == "DELETE":
        pass


@app.route('/article',methods=['GET', 'POST', 'PUT', 'DELETE'])
@decorator.login_required
def article():
    # 文章页面
    if request.method == "GET":
        return render_template("article.html", user = session.get('user_name'))
    if request.method == "POST":
        pass
    if request.method == "PUT":
        pass
    if request.method == "DELETE":
        pass
@app.route('/getarticle',methods=['GET', 'POST', 'PUT', 'DELETE'])
@decorator.login_required
def getarticle():
    # 获取所有文章
    if request.method == "GET":
        data = ArticleModel().GetAll()
        return jsonify({"data": data})
    if request.method == "POST":
        pass
    # 修改文章显示状态
    if request.method == "PUT":
        id = request.json.get("id")
        state = request.json.get("state")
        data = ArticleModel().updatestate(id, state)
        return data
    if request.method == "DELETE":
        pass

@app.route('/addarticle', methods=['GET', 'POST'])
@decorator.login_required
def addarticle():
    # 添加文章页面
    if request.method == "GET":
        return render_template("addarticle.html", nickname = session.get('nickname'))
    # 添加文章功能
    if request.method == "POST":
        data = request.form.to_dict()
        title = data["title"]
        content = data["content"]
        bfcontent = data["bfcontent"]
        author = data["author"]
        # print(data)
        datas = ArticleModel().Addarticles(title, bfcontent, content, author)
        return datas

@app.route('/editarticle', methods=['GET', 'POST'])
@decorator.login_required
def editarticle():
    # 编辑文章页面
    if request.method == "GET":
        return render_template("editarticle.html", user = session.get('user_name'))
    # 编辑文章功能
    if request.method == "POST":
        data = request.form.to_dict()
        id = data["id"]
        title = data["title"]
        content = data["content"]
        bfcontent = data["bfcontent"]
        author = data["author"]
        # print(data)
        datas = ArticleModel().editarticle(id, title, bfcontent, content, author)
        return datas


@app.route('/label', methods=['GET', 'POST', 'PUT'])
@decorator.login_required
def label():
    # 标签页面
    if request.method == "GET":
        return render_template("label.html", user = session.get('user_name'))
    # 添加标签功能
    if request.method == "POST":
        article = request.json.get("article")
        label = request.json.get("label")
        data = LabelModel().addlabel(article, label)
        return data
    # 修改标签功能
    if request.method == "PUT":
        id = request.json.get("id")
        article = request.json.get("article")
        label = request.json.get("label")
        data = LabelModel().Update(id, article, label)
        return data




@app.route('/getlabel', methods=['GET', 'POST', 'PUT'])
@decorator.login_required
def getlabel():
    # 获取所有标签
    if request.method == "GET":
        data = LabelModel().GetAll()
        return jsonify({"data": data})
    # 获取 所有文章标题
    if request.method == "POST":
        data = ArticleModel().GetAll()
        return jsonify({"data": data})
    # 修改状态
    if request.method == "PUT":
        id = request.json.get("id")
        state = request.json.get("state")
        data = LabelModel().Updatestate(state, id)
        return data


@app.route('/comment', methods=['GET', 'POST', 'PUT'])
@decorator.login_required
def comment():
    # 留言页面
    if request.method == "GET":
        return render_template("comment.html", user = session.get('user_name'))
    if request.method == "POST":
        pass
    if request.method == "PUT":
        pass


@app.route('/getcomment', methods=['GET', 'POST', 'PUT'])
@decorator.login_required
def getcommment():
    # 获取所有留言
    if request.method == "GET":
        data = CommentModel().GetAll()
        return jsonify({"data": data})

    if request.method == "POST":
        pass
    # 修改留言状态
    if request.method == "PUT":
        id = request.json.get("id")
        state = request.json.get("state")
        data = CommentModel().Updatestate(state, id)
        return data


@app.route('/info', methods=['GET'])
@decorator.login_required
def info():
    # 文章预览页面
    return render_template("information.html", user = session.get('user_name'))





# UEditor配置
@app.route('/upload/', methods=['GET', 'POST', 'OPTIONS'])
def upload():
    """UEditor文件上传接口

    config 配置文件
    result 返回结果
    """
    mimetype = 'application/json'
    result = {}
    action = request.args.get('action')

    # 解析JSON格式的配置文件
    with open(os.path.join(app.static_folder, 'ueditor', 'php',
                           'config.json')) as fp:
        try:
            # 删除 `/**/` 之间的注释
            CONFIG = json.loads(re.sub(r'\/\*.*\*\/', '', fp.read()))
        except:
            CONFIG = {}

    if action == 'config':
        # 初始化时，返回配置文件给客户端
        result = CONFIG

    elif action in ('uploadimage', 'uploadfile', 'uploadvideo'):
        # 图片、文件、视频上传
        if action == 'uploadimage':
            fieldName = CONFIG.get('imageFieldName')
            config = {
                "pathFormat": CONFIG['imagePathFormat'],
                "maxSize": CONFIG['imageMaxSize'],
                "allowFiles": CONFIG['imageAllowFiles']
            }
        elif action == 'uploadvideo':
            fieldName = CONFIG.get('videoFieldName')
            config = {
                "pathFormat": CONFIG['videoPathFormat'],
                "maxSize": CONFIG['videoMaxSize'],
                "allowFiles": CONFIG['videoAllowFiles']
            }
        else:
            fieldName = CONFIG.get('fileFieldName')
            config = {
                "pathFormat": CONFIG['filePathFormat'],
                "maxSize": CONFIG['fileMaxSize'],
                "allowFiles": CONFIG['fileAllowFiles']
            }

        if fieldName in request.files:
            field = request.files[fieldName]
            uploader = Uploader(field, config, app.static_folder)
            result = uploader.getFileInfo()
        else:
            result['state'] = '上传接口出错'

    elif action in ('uploadscrawl'):
        # 涂鸦上传
        fieldName = CONFIG.get('scrawlFieldName')
        config = {
            "pathFormat": CONFIG.get('scrawlPathFormat'),
            "maxSize": CONFIG.get('scrawlMaxSize'),
            "allowFiles": CONFIG.get('scrawlAllowFiles'),
            "oriName": "scrawl.png"
        }
        if fieldName in request.form:
            field = request.form[fieldName]
            uploader = Uploader(field, config, app.static_folder, 'base64')
            result = uploader.getFileInfo()
        else:
            result['state'] = '上传接口出错'

    elif action in ('catchimage'):
        config = {
            "pathFormat": CONFIG['catcherPathFormat'],
            "maxSize": CONFIG['catcherMaxSize'],
            "allowFiles": CONFIG['catcherAllowFiles'],
            "oriName": "remote.png"
        }
        fieldName = CONFIG['catcherFieldName']

        if fieldName in request.form:
            # 这里比较奇怪，远程抓图提交的表单名称不是这个
            source = []
        elif '%s[]' % fieldName in request.form:
            # 而是这个
            source = request.form.getlist('%s[]' % fieldName)

        _list = []
        for imgurl in source:
            uploader = Uploader(imgurl, config, app.static_folder, 'remote')
            info = uploader.getFileInfo()
            _list.append({
                'state': info['state'],
                'url': info['url'],
                'original': info['original'],
                'source': imgurl,
            })

        result['state'] = 'SUCCESS' if len(_list) > 0 else 'ERROR'
        result['list'] = _list

    else:
        result['state'] = '请求地址出错'

    result = json.dumps(result)

    if 'callback' in request.args:
        callback = request.args.get('callback')
        if re.match(r'^[\w_]+$', callback):
            result = '%s(%s)' % (callback, result)
            mimetype = 'application/javascript'
        else:
            result = json.dumps({'state': 'callback参数不合法'})

    res = make_response(result)
    res.mimetype = mimetype
    res.headers['Access-Control-Allow-Origin'] = '*'
    res.headers['Access-Control-Allow-Headers'] = 'X-Requested-With,X_Requested_With'
    return res


if __name__ == '__main__':
    app.run(debug=True)
