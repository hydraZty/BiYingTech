/**
 * Created by zhangtianyi on 2018/4/9.
 */


new navScroll({
    nav : {                  //导航跳转功能，不需要可以删除此代码块
        id : 'navigation',   //点击跳转到容器的导航ID 请把 ID 设置给 UL
        current : 'current', //默认点击A链接后，默认样式名
        speed : 25,          //动画执行速度，越小则越快。反之，越慢。
        fixPx :0            //在导航使用绝对定位且在窗口上方，容器与导航的差,默认为0
    }
})


// var clamp2=document.getElementsByClassName("clamp2");
var clamp3=document.getElementsByClassName("clamp3");

for(var i=0;i<=clamp3.length;i++){
    $clamp(clamp3[i],{clamp:3,useNativeClamp: false})
}



// $clamp(clamp2,{clamp:2,useNativeClamp: false});
// $clamp(clamp3,{clamp:3,useNativeClamp: false});
