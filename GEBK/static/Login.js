$('[type="submit"]').unbind().click(function(){
   var account = $("#account").val()
    var password = $("#password").val()
    if (account== ""){
        layer.msg("用户名不能为空")
        return false

    }
    if (password = ""){
        layer.msg("密码不能为空")
        return false
    }
    $.ajax({
        url:"{{ url_for('Login') }}",
        type:"POST",
        contentType:"application/json",
        data:'{"account":"'+account+'","password":"'+password+'"}',
        success:function (res) {
            console.log(res)
        }
    })


})