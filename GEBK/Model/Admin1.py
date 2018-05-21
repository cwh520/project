from hashlib import md5

def create_md5( pwd, salt="chenwenhao250"):
    md5_obj = md5()
    password = pwd + salt
    md5_obj.update(password.encode("utf8"))
    return md5_obj.hexdigest()

print(create_md5("123"))
