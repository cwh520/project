#ending = utf-8
from flask import Flask, render_template, request, jsonify
from Model.aritcle import ArticleModel

app = Flask(__name__)


@app.route('/')
def index():
    data = ArticleModel().GetAll()
    return render_template("profile.html", article=data)

@app.route('/getcomment', methods=['GET','POST','DELETE', 'PUT'])
def getcomment():
    if request.method == "GET":
        pass
    if request.method == "POST":
        id = request.json.get("id")
        data = ArticleModel().Getcomment(id)
        return data
    if request.method == "DELETE":
        pass
    if request.method == "PUT":
        pass

@app.route('/comment', methods=['GET','POST','DELETE', 'PUT'])
def comments():
    if request.method == "GET":
      pass
    if request.method == "POST":
        id = request.json.get('id')
        print(id)
        name = request.json.get('name')
        print(name)
        email = request.json.get('email')
        print(email)
        message = request.json.get('message')
        print(message)
        data = ArticleModel().Addcomment(id, name, email, message)
        return data

    if request.method == "DELETE":
        pass
    if request.method == "PUT":
        pass


@app.route('/replys', methods=['GET','POST','DELETE', 'PUT'])
def replys():
    if request.method == "GET":
        pass
    if request.method == "POST":
        id = request.json.get('id')
        print(id)
        name = request.json.get('name')
        print(name)
        email = request.json.get('email')
        print(email)
        message = request.json.get('message')
        print(message)
        data = ArticleModel().Addreply(id, name, email, message)
        return data
    if request.method == "DELETE":
        pass
    if request.method == "PUT":
        pass





if __name__ == '__main__':
    app.run(port=6001)
