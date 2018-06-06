var page_index = 1

$(".load").click(function () {
    page_index +=1
    //console.log(page_index)
    $.ajax({
        url:"/load",
        type:"POST",
        contentType: "application/json",
        data:'{"index":"'+page_index+'"}',
        success:function (result) {
            if (result !=""){
                var datas = result["data"]
            //console.log(datas[1])
                 var  html ='<!-- Post 1 -->' +
    '                <article id="post-'+(page_index*2-1)+'" class="blog-article">                    ' +
    '' +
    '                    <div class="col-md-12">' +
    '' +
    '                        <div class="row">' +
    '' +
    '                            <div class="col-md-12 post_media">' +
    '                                <div class="post-format-icon">' +
    '                                    <a href="#" class="item-date"><span class="fa fa-picture-o"></span></a>' +
    '                                </div>' +
    '                                <div class="media">' +
    '                                    <div class="he-wrap tpl2">' +
    '                                        <div id="carousel-'+(page_index*2-1)+' " class="carousel slide" data-ride="carousel">' +
    '' +
    '                                            <ol class="carousel-indicators">' +
    '                                                <li data-target="#carousel-'+(page_index*2-1)+'" data-slide-to="0" class="active"></li>' +
    '                                                <li data-target="#carousel-'+(page_index*2-1)+'" data-slide-to="1"></li>' +
    '                                                <li data-target="#carousel-'+(page_index*2-1)+'" data-slide-to="2"></li>' +
    '                                            </ol>' +
    '' +
    '                                            <div class="carousel-inner">' +
    '' +
    '                                                <div class="item active">' +
    '                                                    <404img src="" data-original="../static/images/blog/blog-1.jpg" alt="" />' +
    '                                                    <div class="carousel-caption">' +
    '                                                        <h4>First Thumbnail label</h4>' +
    '                                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>' +
    '                                                    </div>' +
    '                                                </div>' +
    '' +
    '' +
    '                                                <div class="item">' +
    '                                                    <404img src="" data-original="../static/images/blog/blog-2.jpg"  alt="" />' +
    '                                                    <div class="carousel-caption">' +
    '                                                        <h4>First Thumbnail label</h4>' +
    '                                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>' +
    '                                                    </div>' +
    '                                                </div>' +
    '' +
    '                                                <div class="item">' +
    '                                                    <404img src="" data-original="../static/images/blog/blog-3.jpg"  alt="" />' +
    '                                                    <div class="carousel-caption">' +
    '                                                        <h4>First Thumbnail label</h4>' +
    '                                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>' +
    '                                                    </div>' +
    '                                                </div>' +
    '' +
    '                                            </div>' +
    '' +
    '                                            <a class="left carousel-control" href="#carousel-'+(page_index*2-1)+'" data-slide="prev">' +
    '                                                <span class="glyphicon glyphicon-chevron-left"></span>' +
    '                                            </a>' +
    '' +
    '                                            <a class="right carousel-control" href="#carousel-'+(page_index*2-1)+'" data-slide="next">' +
    '                                                <span class="glyphicon glyphicon-chevron-right"></span>' +
    '                                            </a>' +
    '' +
    '                                        </div>' +
    '                                    </div>' +
    '' +
    '                                </div>' +
    '                            </div>' +
    '                        </div>' +
    '' +
    '                        <div class="row">' +
    '                            <div class="col-md-12 post_content">' +
    '                                <div class="content post_format_standart">' +
    '                                    <div class="top_c ">' +
    '' +
    '                                        <div class="title_content">' +
    '                                            <div class="text_content"><a href="#post-'+(page_index*2-1)+'" abc="'+datas[0]["id"]+'" class="read_more">'+datas[0]["title"]+'</a></div>' +
    '                                            <div class="clear"></div>' +
    '                                        </div>' +
    '' +
    '                                        <ul class="info">' +
    '                                            <li><i class="glyphicon glyphicon-comment"></i> '+datas[0]["comment"]+' 评论</li>' +
    '                                            <li><i class="glyphicon glyphicon-time"></i> '+datas[0]["time"]+'</li>' +
    '                                            <li><i class="glyphicon glyphicon-user"></i> '+datas[0]["author"]+'</li>' +
    '                                            <li><i class="glyphicon glyphicon-tag"></i> '+datas[0]["label"]+'</li>' +
    '                                        </ul>' +
    '' +
    '                                        <div class="blog-content">' +
    '                                            <p><i class="fa fa-quote-left"></i>'+datas[0]["bfcontent"]+'</p></div>' +
    '                                    </div>' +
    '                                </div>\t' +
    '' +
    '                                <a href="#post-'+(page_index*2-1)+'" name="read" abc="'+datas[0]["id"]+'" class="read_m pull-right">阅读 文章<i class=\'glyphicon glyphicon-chevron-right\'></i></a>' +
    '' +
    '                            </div>' +
    '                        </div>' +
    '' +
    '                    </div>' +
    '                </article>' +
    '                <!-- End Post 1 -->' +
    '' +
    '                <div class="clear"></div>' +
    ''
     var htmls =
    '         <section id="post-'+(page_index*2-1)+'-page" class="content-post" style="display: none">' +
    '                                                                    <div class="row inner">' +
    '' +
    '                                                                        <div class="col-md-12" style="width: 100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;float: left;background: rgba(255, 255, 255, 0.8);padding-bottom: 15px;padding-top: 15px;">' +
    '' +
    '                                                                            <article class="postPage">' +
    '' +
    '                                                                                <div class="col-md-12 post_media">' +
    '                                                                                    <div class="post-format-icon">' +
    '                                                                                        <a href="#" class="item-date"><span class="fa fa-picture-o"></span></a>' +
    '                                                                                    </div>' +
    '                                                                                    <div class="media">' +
    '                                                                                        <div class="he-wrap tpl2">' +
    '                                                                                            <div id="carousel-2" class="carousel slide" data-ride="carousel">' +
    '' +
    '                                                                                                <ol class="carousel-indicators">' +
    '                                                                                                    <li data-target="#carousel-'+(page_index*2-1)+'" data-slide-to="0" class=""></li>' +
    '                                                                                                    <li data-target="#carousel-'+(page_index*2-1)+'" data-slide-to="1" class=""></li>' +
    '                                                                                                    <li data-target="#carousel-'+(page_index*2-1)+'" data-slide-to="2" class="active"></li>' +
    '                                                                                                </ol>' +
    '' +
    '                                                                                                <div class="carousel-inner">' +
    '' +
    '                                                                                                    <div class="item active">' +
    '                                                                                                        <404img src="" data-original="../static/images/blog/blog-1.jpg">' +
    '                                                                                                        <div class="carousel-caption">' +
    '                                                                                                            <h4>First Thumbnail label</h4>' +
    '                                                                                                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>' +
    '                                                                                                        </div>' +
    '                                                                                                    </div>' +
    '' +
    '' +
    '                                                                                                    <div class="item">' +
    '                                                                                                        <404img src="" data-original=../static/images/blog/blog-2.jpg" >' +
    '                                                                                                        <div class="carousel-caption">' +
    '                                                                                                            <h4>First Thumbnail label</h4>' +
    '                                                                                                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>' +
    '                                                                                                        </div>' +
    '                                                                                                    </div>' +
    '' +
    '                                                                                                    <div class="item">' +
    '                                                                                                        <404img src="" data-original="../static/images/blog/blog-3.jpg">' +
    '                                                                                                        <div class="carousel-caption">' +
    '                                                                                                            <h4>First Thumbnail label</h4>' +
    '                                                                                                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>' +
    '                                                                                                        </div>' +
    '                                                                                                    </div>' +
    '' +
    '                                                                                                </div>' +
    '' +
    '                                                                                            </div>' +
    '                                                                                        </div>' +
    '' +
    '                                                                                    </div>' +
    '                                                                                </div>' +
    '' +
    '' +
    '                                                                                <div class="title_content">' +
    '                                                                                    <div class="text_content">data'+datas[0]["title"]+'</div>' +
    '                                                                                    <div class="clear"></div>' +
    '                                                                                </div>' +
    '' +
    '                                                                               <div>'+datas[0]["content"]+'</div>' +

    '                                                                                <div class="col-md-12 first">' +
    '                                                                                    <div class="info">'+
    '                                                                                        <ul class="info-post">' +
    '                                                                                            <li><i class="glyphicon glyphicon-comment"></i> '+datas[0]["comment"]+' 评论</li>' +
    '                                                                                            <li><i class="glyphicon glyphicon-time"></i> '+datas[0]["time"]+'</li>' +
    '                                                                                            <li><i class="glyphicon glyphicon-user"></i>'+datas[0]["author"]+' </li>' +
    '                                                                                            <li><i class="glyphicon glyphicon-tag"></i>'+datas[0]["label"]+'</li>' +
    '                                                                                        </ul>' +
    '                                                                                    </div>' +
    '' +
    '                                                                                    <div class="clear"></div>' +
    '' +
    '                                                                                    <div class="clear"></div>' +
    '' +
    '' +
    '                                                                                    <div class="post_comments">' +
    '' +
    '                                                                                        <div class="title_content">' +
    '                                                                                            <div class="text_content">留 言 板</div>' +
    '                                                                                            <div class="clear"></div>' +
    '                                                                                        </div>' +
    '' +
    '                                                                                        <div class="clear"></div>' +
    '' +
    '                                                                                        <div class="comments">' +
    '' +
    '                                                                                        </div>' +
    '' +
    '                                                                                        <div class="clear"></div>' +
    '' +
    '                                                                                        <div class="comment_form">' +
    '                                                                                         <div class="title_content">' +
    '                                                                                            <div class="text_content">留下你宝贵的意见</div>' +
    '                                                                                            <div class="clear"></div>' +
    '                                                                                       </div>' +
    '                                                                                        <div  id="comment_form">' +
    '                                                                                           <p class="form-group" name="contact" id="contact-name">' +
    '                                                                                                <label for="name">你的 昵称</label>' +
    '                                                                                                <input type="text" name="name_'+(page_index*2-1)+'" class="form-control" id="inputSuccess" placeholder="Name*...">' +
    '                                                                                            </p>' +
    '                                                                                            <p class="form-group" id="contact-email">' +
    '                                                                                                <label for="email">你的 邮箱</label>' +
    '                                                                                                <input type="email" name="email_'+(page_index*2-1)+'"  class="span3 form-control" id="inputSuccess" placeholder="Email*... "required>' +
    '                                                                                            </p>' +
    '                                                                                            <p class="form-group" id="contact-message">' +
    '                                                                                                <label for="message">你的 内容</label>' +
    '                                                                                                <textarea name="message_'+(page_index*2-1)+'" cols="88" rows="6" class="form-control" id="inputError" placeholder="Your Comment..."></textarea>' +
    '' +
    '                                                                                            </p>' +
    '                                                                                            <input type="reset" index="'+(page_index*2-1)+'" value="清 空"  class="reset">' +
    '                                                                                            <button class="submit" abc="'+datas[0]["id"]+'" index="'+(page_index*2-1)+'"  data-target=".bs-example-modal-sm">确认 评论</button>' +
    '                                                                                        </div>' +
    '                                                                                        <div class="clear"></div>' +
    '                                                                                    </div>' +
    '' +
    '                                                                                    </div>' +
    '' +
    '                                                                                    <div class="col-md-12" style="margin-top: 20px;">' +
    '                                                                                         <a href="#post-'+(page_index*2)+'" class="readmore" id="pagination" name="read" abc="{{ item["id"] }}"><i class="glyphicon glyphicon-chevron-right"></i></a>' +
    '                                                                                         <a href="#post-'+(page_index*2-2)+'" class="readmore" id="pagination" name="read" abc="{{ item["id"] }}"><i class="glyphicon glyphicon-chevron-left"></i></a>' +
    '                                                                                        <a href="#blog" class="readmore"><i class="glyphicon glyphicon-chevron-left" data-tab-name="blog"></i>所有 文章</a>' +
    '                                                                                    </div>' +
    '' +
    '                                                                                    <div class="clear"></div>' +
    '' +
    '                                                                            </div></article>' +
    '                                                                        </div>' +
    '                                                                        <div class="clear"></div>' +
    '                                                                    </div>' +
    '                                                                </section>'


    if (datas[1] != null){
          html +='<article id="post-'+(page_index*2)+'" class="blog-article">                    ' +
    '' +
    '                    <div class="col-md-12">' +
    '' +
    '                        <div class="row">' +
    '' +
    '                            <div class="col-md-12 post_media">' +
    '' +
    '                                <div class="post-format-icon">' +
    '                                    <a href="#" class="item-date"><span class="fa fa-pencil"></span></a>' +
    '                                </div>' +
    '' +
    '                            </div>' +
    '                        </div>' +
    '' +
    '                        <div class="row">' +
    '                            <div class="col-md-12 post_content">' +
    '                                <div class="content post_format_standart">' +
    '                                    <div class="top_c ">' +
    '' +
    '                                        <div class="title_content">' +
    '                                            <div class="text_content"><a href="#post-'+(page_index*2)+'" abc="'+datas[1]["id"]+'" class="read_more">'+datas[1]["title"]+'</a></div>' +
    '                                            <div class="clear"></div>' +
    '                                        </div>' +
    '' +
    '                                        <ul class="info">' +
    '                                            <li><i class="glyphicon glyphicon-comment"></i> '+datas[1]["comment"]+'  评论</li>' +
    '                                            <li><i class="glyphicon glyphicon-time"></i> '+datas[1]["time"]+'</li>' +
    '                                            <li><i class="glyphicon glyphicon-user"></i> '+datas[1]["author"]+'</li>' +
    '                                            <li><i class="glyphicon glyphicon-tag"></i> '+datas[1]["label"]+'</li>' +
    '                                        </ul>' +
    '' +
    '                                        <div class="blog-content">' +
    '                                            <p><i class="fa fa-quote-left"></i>'+datas[1]["bfcontent"]+'</p></div>' +
    '                                    </div>' +
    '                                </div>\t' +
    '' +
    '                                <a href="#post-'+(page_index*2)+'" name="read" abc="'+datas[1]["id"]+'" class="read_m pull-right">阅读 文章 <i class=\'glyphicon glyphicon-chevron-right\'></i></a>' +
    '' +
    '                            </div>' +
    '                        </div>' +
    '' +
    '                    </div>' +
    '                </article>' +
    '                <!-- End Post 2 -->'

        htmls += '<section id="post-'+(page_index*2)+'-page" class="content-post" style="display: none">' +
            '                             <div class="row inner">' +
            '' +
            '                                <div class="col-md-12" style="width: 100%;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;float: left;background: rgba(255, 255, 255, 0.8);padding-bottom: 15px;padding-top: 15px;">' +
            '' +
            '                                      <article class="postPage">' +
            '' +
            '                                             <div class="col-md-12 post_media">' +
            '' +
            '                                                   <div class="post-format-icon">' +
            '                                                            <a href="#" class="item-date"><span class="fa fa-pencil"></span></a>' +
            '                                                                   </div>' +
            '' +
            '                                                                                </div>' +
            '' +
            '                                                                                <div class="title_content">' +
            '                                                                                    <div class="text_content">'+datas[1]["title"]+'</div>' +
            '                                                                                    <div class="clear"></div>' +
            '                                                                                </div>' +
            '' +
            '' +
            '                                                                                <div>'+datas[1]["content"]+'</div>' +
            '' +
            '' +
            '                                                                                <div class="col-md-12 first">' +
            '                                                                                    <div class="info">' +
            '                                                                                        <ul class="info-post">' +
            '                                                                                            <li><i class="glyphicon glyphicon-comment"></i> '+datas[1]["comment"]+' 评论</li>' +
            '                                                                                            <li><i class="glyphicon glyphicon-time"></i>'+datas[1]["time"]+'</li>' +
            '                                                                                            <li><i class="glyphicon glyphicon-user"></i>'+datas[1]["author"]+'</li>' +
            '                                                                                            <li><i class="glyphicon glyphicon-tag"></i>'+datas[1]["label"]+'</li>' +
            '                                                                                        </ul>' +
            '                                                                                    </div>' +
            '' +
            '                                                                                    <div class="clear"></div>' +
            '' +
            '' +
            '                                                                                    <div class="clear"></div>' +
            '' +
            '' +
            '                                                                                    <div class="post_comments">' +
            '' +
            '                                                                                        <div class="title_content">' +
            '                                                                                            <div class="text_content">留言板</div>' +
            '                                                                                            <div class="clear"></div>' +
            '                                                                                        </div>' +
            '                                                                                         <div class="clear"></div>' +
            '' +
            '                                                                                         <div class="comments">' +
            '' +
            '                                                                                        </div>' +
            '' +
            '                                                                                        <div class="clear"></div>' +
            '' +
            '                                                                                          <div class="comment_form">' +
            '                                                                                         <div class="title_content">' +
            '                                                                                            <div class="text_content">留下你宝贵的意见</div>' +
            '                                                                                            <div class="clear"></div>' +
            '                                                                                       </div>' +
            '                                                                                        <div  id="comment_form">' +
            '                                                                                           <p class="form-group"  id="contact-name">' +
            '                                                                                                <label for="name">你的 昵称</label>' +
            '                                                                                                <input type="text" name="name_'+(page_index*2)+'" class="form-control" id="inputSuccess" placeholder="Name*...">' +
            '                                                                                            </p>' +
            '                                                                                            <p class="form-group" id="contact-email">' +
            '                                                                                                <label for="email">你的 邮箱</label>' +
            '                                                                                                <input type="email" name="email_'+(page_index*2)+'" class="span3 form-control" id="inputSuccess" placeholder="Email*..." required>' +
            '                                                                                            </p>' +
            '                                                                                            <p class="form-group" id="contact-message">' +
            '                                                                                                <label for="message">你的 内容</label>' +
            '                                                                                                <textarea name="message_'+(page_index*2)+'"  cols="88" rows="6" class="form-control" id="inputError" placeholder="Your Comment..."></textarea>' +
            '' +
            '                                                                                            </p>' +
            '                                                                                            <input type="reset" index="'+(page_index*2)+'"  value="清 空"  class="reset">' +
            '                                                                                            <button class="submit" abc="'+datas[1]["id"]+'" index="'+(page_index*2)+'"  data-target=".bs-example-modal-sm">确认 评论</button>' +
            '                                                                                        </div>' +
            '                                                                                        <div class="clear"></div>' +
            '                                                                                    </div>' +
            '' +
            '' +
            '                                                                                    </div>' +
            '' +
            '' +
            '' +
            '                                                                                    <div class="col-md-12" style="margin-top: 20px;">' +
            '                                                                                         <a href="#post-{{ loop.index + 1 }}" class="readmore" id="pagination" name="read" abc="'+datas[1]["id"]+'"><i class="glyphicon glyphicon-chevron-right"></i></a>' +
            '                                                                                         <a href="#post-{{ loop.index - 1 }}" class="readmore" id="pagination" name="read" abc="'+datas[1]["id"]+'"><i class="glyphicon glyphicon-chevron-left"></i></a>' +
            '                                                                                        <a href="#blog" class="readmore"><i class="glyphicon glyphicon-chevron-left" data-tab-name="blog"></i>所有 文章</a>' +
            '                                                                                    </div>' +
            '' +
            '                                                                                    <div class="clear"></div>' +
            '' +
            '                                                                            </div></article>' +
            '                                                                        </div>' +
            '                                                                        <div class="clear"></div>' +
            '                                                                    </div>' +
            '                                                                </section>'
    }
    $("#blog_page").append(htmls)
    $(".load").before(html)
                 /* --------------------------------- Blog ------------------------------- */
    /* ---------------------------------------------------------------------- */

    // More blog
    $('a.read_m').click(function() {
        var pagina = $(this).attr('href');
        var postdetail = pagina + '-page';

        if (pagina.indexOf("#post-") != -1) {

            $('#blog-page').hide();

            $(postdetail).show();
            $(".tabs-blog").trigger('click');
        }

        return false;

    });

    // More blog
    $('a.read_more').click(function() {
        var pagina = $(this).attr('href');
        var postdetail = pagina + '-page';

        if (pagina.indexOf("#post-") != -1) {

            $('#blog-page').hide();

            $(postdetail).show();
            $(".tabs-blog").trigger('click');
        }

        return false;

    });

    //pagination All
    $('.content-post a').click(function() {
        var pagina = $(this).attr('href');

        if (pagina == "#blog") {

            $('.content-post').hide();
            $('#blog-page').show();
            $(".tabs-blog").trigger('click');

        }

        return false;

    });

    //pagination blog
    $('.content-post #pagination').click(function() {


        var pagina = $(this).attr('href');
        var postdetail = pagina + '-page';

        if (pagina.indexOf("#post-") != -1) {

            $('#blog-page').hide();
            $('.content-post').hide();

            $(postdetail).show();
            $(".tabs-blog").trigger('click');
        }

        return false;

    });

      var re='<div class="comment_form" name=replys>'+
                '<div class="title_content">'+
                    '<div class="text_content">评论回复</div>'+
                    '<div class="clear"></div>'+
               '</div>'+
                '<div id="comment_form">'+
                    '<p class="form-group" id="contact-name">'+
                        '<label for="name">你的 昵称</label>'+
                        '<input type="text" name="name" class="form-control" id="inputSuccess" placeholder="Name*...">'+
                    '</p>'+
                    '<p class="form-group" id="contact-email">'+
                        '<label for="email">你的 邮箱</label>'+
                        '<input type="email" name="email"  class="span3 form-control" id="inputSuccess" placeholder="Email*... "required>'+
                    '</p>'+
                    '<p class="form-group" id="contact-message">'+
                        '<label for="message">内容 </label>'+
                        '<textarea name="message" cols="88" rows="6" onkeyup="wordStatic(this);" class="form-control" id="inputError" placeholder="请保持字数在32位以上"></textarea>'+
                        '<div class="weui_textarea_counter"><span id="num">0</span>/500</div> '+
                    '</p>'+
                    '<input type="reset" name="reset" value="取 消" class="reset">'+
                   ' <button class="submit" id="submit" data-target=".bs-example-modal-sm">回 复 </button>'+
                '</div>'+
                '<div class="clear"></div>'+
            '</div>'

      $('[name="read"],.text_content a').click(function(){
          var id = $(this).attr("abc")
          //console.log(id)
          $(".comments").empty()
          $.ajax({
          url: "/getcomment",
          type: "POST",
          contentType: "application/json",
          data: '{"id":"'+id+'"}',
          success: function (rep) {
              //console.log(rep)
              if (rep["code"] == 200){
                  $(".comments").empty()
                  $(".comments").append(rep["content"])
                // 回复留言
               $(".reply").unbind().click(function () {
                    var id = $(this).attr("abc")
                    var zj =$(this).parents(".comment")
                    zj.append(re)
                    $("#submit").unbind().click(function(){
                        var name = $('[name="name"]').val()
                        var email = $('[name="email"]').val()
                        var message = $('[name="message"]').val()
                        if(name == ""){
                              layer.msg("昵称不能为空")
                              return false
                           }
                           if(email.trim()  == ""){
                              layer.msg("邮箱不能为空")
                              return false
                           }

                           if(message.trim() == ""){
                              layer.msg("内容不能为空")
                              return false
                           }
                           if(message.trim().length <= 32){
                              layer.msg("内容字数不够")
                              return false
                           }
                            var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                                if(!myreg.test(email.trim())){
                                    layer.msg("邮箱格式不正确")
                                    return false;
                                }
                          $.ajax({
                               url:"/replys",
                               type:"POST",
                               contentType: "application/json",
                               data:'{"id":"'+id+'","name":"'+name+'","email":"'+email+'","message":"'+message+'"}',
                               success:function(data){
                                   if(data['code']==200){
                                       $('[name="replys"]').remove()
                                       var da = data['content']
                                       var html ='<div class="comment sub">'+
                                                ' <404img src="'+da.pic+'" alt="404img" width="100" height="100">'+
                                                ' <div class="text">'+
                                                ' <div class="name">'+da.nickname+' <a class="reply" abc="'+da.id+'" href="#">回 复</a></div>'+
                                                '<div class="date">'+da.time+'</div>'+da.content+''+
                                                '</div>'+
                                                ' <div class="clear"></div>'+
                                                ' </div>'+
                                                ' <div class="clear"></div>'
                                       zj.append(html)


                                   }


                               }
                          })



                   })
                     // 取消回复
                    $(".reset").unbind().click(function () {
                      $('[name="replys"]').remove()
                    })



               })



              }

          }


      })




      })

      $(".submit").unbind().click(function () {
          var index= $(this).attr("index")
          var  id =$(this).attr("abc")
          var name = $('[name="name_'+ index+'"]').val()
          var email = $('[name="email_'+ index+'"]').val()
          var message = $('[name="message_'+index+'"]').val()
           if(name == ""){
              layer.msg("昵称不能为空")
              return false
           }
           if(email == ""){
              layer.msg("邮箱不能为空")
              return false
           }

           if(message == ""){
              layer.msg("内容不能为空")
              return false
           }
            var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if(!myreg.test(email.trim())){
                    layer.msg("邮箱格式不正确")
                    return false;
                }
           $.ajax({
               url:"/comment",
               type:"POST",
               contentType: "application/json",
               data:'{"id":"'+id+'","name":"'+name+'","email":"'+email+'","message":"'+message+'"}',
               success:function (result) {
                   //console.log(result)
                   if(result['code'] ==200){
                      var data = result["content"]
                      var  html = '<div class="comment">'+
                                   '<404img src="'+data['pic']+'" alt="404img" width="100" height="100">'+
                                   '<div class="text">'+
                                   '<div class="name">' + data['nickname'] + ' </div>'+
                                   '<div class="date">' + data['time'] + '</div>'+
                                   ' '+ data['content']+''+
                                   '</div>' +
                                   '<div class="clear"></div>'+
                                   '</div>'

                       $(".comments").append(html)
                       $('[name="name_'+ index+'"]').val("")
                       $('[name="email_'+ index+'"]').val("")
                       $('[name="message_'+index+'"]').val("")
                   }

               }

           })


      })

      $(".reset").click(function(){
          var index= $(this).attr("index")
              $('[name="name_'+ index+'"]').val("")
              $('[name="email_'+ index+'"]').val("")
              $('[name="message_'+index+'"]').val("")

     })






    /* ---------------------------------------------------------------------- */
            }
            else{
                $(".load").text("没有文章了！！").attr("disabled","disabled")
            }





        }
    })

});

