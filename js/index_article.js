/**
 * Created by zhangtianyi on 2018/5/2.
 */





var $articles;
$.get(xmlFile, function (xml) {
    //xml即为可以读取使用的内容，具体读取见第2点
    var $xml = $(xml);
    $articles = $xml.find("article");

    for (var i = 0; i < 4; i++) {
        var article = $articles[i];
        var title = article.getElementsByTagName("title")[0].innerHTML;
        var date = article.getElementsByTagName("date")[0].innerHTML;
        var thumbnail = article.getElementsByTagName("thumbnail")[0].innerHTML;
        var section = article.getElementsByTagName("section")[0].innerHTML.slice(0, 300);
        var num = i + 1 + "";
        var ele = $('<a class="media" href="article.html?num=' + num + '"> <div class="media-left"> <img class="video-icon" src="../image/picture-icon.png" alt=""> <img src="' + thumbnail + '" alt="icon"> </div> <div class="media-body"> <b class="media-heading">' + title + '</b> <p class="date">' + date + '</p> <p class="content clamp4">' + section + '</p></div></a>');

        $(".index-news-wrapper").append(ele);

        $(".nav-picture").append(ele);

    }


    var clamp4 = document.getElementsByClassName("clamp4");
    try {
        for (var i = 0; i <= clamp4.length; i++) {
            $clamp(clamp4[i], {clamp: 4, useNativeClamp: false})
        }
    } catch (err) {
        console.log(err)
    }

});
