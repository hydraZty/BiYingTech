/**
 * Created by zhangtianyi on 2018/5/2.
 */



function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}





var count=0;


var $articles;
$.get(xmlFile,function(xml){
    //xml即为可以读取使用的内容，具体读取见第2点
    var $xml=$(xml);
    $articles=$xml.find("article");


    num=getQueryString("num")-1;
    console.log(num);
    if(num>=0){
        var article=$articles[num];
        var title=article.getElementsByTagName("title")[0].innerHTML;
        $("#title").text(title);

        var date=article.getElementsByTagName("date")[0].innerHTML;
        $("#date").text(date);


        var banner=article.getElementsByTagName("banner")[0].innerHTML;
        $("#banner").attr("src",banner);


        var section=article.getElementsByTagName("section")[0];
        $("#content").html(section);



        var sign1=article.getElementsByTagName("sign1")[0].innerHTML;
        $("#sign-1").text(sign1);


        var sign2=article.getElementsByTagName("sign2")[0].innerHTML;
        $("#sign-2").text(sign2);

    }else{
        for(var i=count;i<4;i++){
            var article=$articles[i];
            var title=article.getElementsByTagName("title")[0].innerHTML;
            var date=article.getElementsByTagName("date")[0].innerHTML;
            var thumbnail=article.getElementsByTagName("thumbnail")[0].innerHTML;
            var section=article.getElementsByTagName("section")[0].innerHTML.slice(0,300);
            var num=i+1+"";
            var ele=$('<a class="media" href="article.html?num='+num+'"> <div class="media-left"> <img class="video-icon" src="../image/picture-icon.png" alt=""> <img src="'+thumbnail+'" alt="icon"> </div> <div class="media-body"> <b class="media-heading">'+title+'</b> <p class="date">'+date+'</p> <p class="content clamp4">'+section+'</p></div></a>');

            $(".index-news-wrapper").append(ele);

            $(".nav-picture").append(ele);
            count++;

        }



    }


    var clamp4=document.getElementsByClassName("clamp4");
    try{
        for(var i=0;i<=clamp4.length;i++){
            $clamp(clamp4[i],{clamp:4,useNativeClamp: false})
        }
    }catch(err){
        console.log(err)
    }

});


$("#view-more").click(function(){


    console.log("click");
    for(var i=count;i<(count+4)&&i<$articles.length;i++){
        var article=$articles[i];
        var title=article.getElementsByTagName("title")[0].innerHTML;
        var date=article.getElementsByTagName("date")[0].innerHTML;
        var thumbnail=article.getElementsByTagName("thumbnail")[0].innerHTML;
        var section=article.getElementsByTagName("section")[0].innerHTML.slice(0,300);
        var num=i+1+"";
        var ele=$('<a class="media" href="article.html?num='+num+'"> <div class="media-left"> <img class="video-icon" src="../image/picture-icon.png" alt=""> <img src="'+thumbnail+'" alt="icon"> </div> <div class="media-body"> <b class="media-heading">'+title+'</b> <p class="date">'+date+'</p> <p class="content clamp4">'+section+'</p></div></a>');

        $(".index-news-wrapper").append(ele);

        $(".nav-picture").append(ele);
        count++;

        if(count==$articles.length){
            $("#view-more").hide();
            $(".noting-more").show();
        }
    }

    var clamp4=document.getElementsByClassName("clamp4");
    try{
        for(var i=0;i<=clamp4.length;i++){
            $clamp(clamp4[i],{clamp:4,useNativeClamp: false})
        }
    }catch(err){
        console.log(err)
    }
})

