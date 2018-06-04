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
    '                                                    <img src="" data-original="../static/images/blog/blog-1.jpg" alt="" />' +
    '                                                    <div class="carousel-caption">' +
    '                                                        <h4>First Thumbnail label</h4>' +
    '                                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>' +
    '                                                    </div>' +
    '                                                </div>' +
    '' +
    '' +
    '                                                <div class="item">' +
    '                                                    <img src="" data-original="../static/images/blog/blog-2.jpg"  alt="" />' +
    '                                                    <div class="carousel-caption">' +
    '                                                        <h4>First Thumbnail label</h4>' +
    '                                                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>' +
    '                                                    </div>' +
    '                                                </div>' +
    '' +
    '                                                <div class="item">' +
    '                                                    <img src="" data-original="../static/images/blog/blog-3.jpg"  alt="" />' +
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
    '                                            <div class="text_content"><a href="#post-'+(page_index*2-1)+'" class="read_more">'+datas[0]["title"]+'</a></div>' +
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
    '                                <a href="#post-'+(page_index*2-1)+'" class="read_m pull-right">阅读 文章<i class=\'glyphicon glyphicon-chevron-right\'></i></a>' +
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
    '                                                                                                        <img src="" data-original="../static/images/blog/blog-1.jpg">' +
    '                                                                                                        <div class="carousel-caption">' +
    '                                                                                                            <h4>First Thumbnail label</h4>' +
    '                                                                                                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>' +
    '                                                                                                        </div>' +
    '                                                                                                    </div>' +
    '' +
    '' +
    '                                                                                                    <div class="item">' +
    '                                                                                                        <img src="" data-original=../static/images/blog/blog-2.jpg" >' +
    '                                                                                                        <div class="carousel-caption">' +
    '                                                                                                            <h4>First Thumbnail label</h4>' +
    '                                                                                                            <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>' +
    '                                                                                                        </div>' +
    '                                                                                                    </div>' +
    '' +
    '                                                                                                    <div class="item">' +
    '                                                                                                        <img src="" data-original="../static/images/blog/blog-3.jpg">' +
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
    '                                            <div class="text_content"><a href="#post-'+(page_index*2)+'" class="read_more">'+datas[1]["title"]+'</a></div>' +
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
    '                                <a href="#post-'+(page_index*2)+'" class="read_m pull-right">阅读 文章 <i class=\'glyphicon glyphicon-chevron-right\'></i></a>' +
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
    $("#blog-page").append(html)
            }
            else{
                $(".load").text("没有文章了！！").attr("disabled","disabled")
            }





        }
    })

});

