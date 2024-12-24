// 导航栏跟随
$(function() {
    $(window).scroll(function() {
        $offset = $('.placeholder').offset(); //不能用自身的div，不然滚动起来会很卡
        if ($(window).scrollTop() > $offset.top) {
            $('.header').css({
                'position': 'fixed',
                'top': '0px',
                'left': $offset.left + 'px',
                'z-index': '999'
            });
            $(".container").css({
                "margin-top": "93px"
            });
        } else {
            $('.header').removeAttr('style');
            $('.container').removeAttr('style');
        }
    });
});

window.onload = function (){
    var nav_box = document.getElementsByClassName("nav_box")[0];
    var ul = document.getElementById("monavber");
    nav_box.onclick = function (){
        var style = ul.style;
        style.display = style.display == "block" ? "none" : "block";
        nav_box.className = style.display == "block" ? "open" : "nav_box"
    }
} 
//手机端导航栏展开
$(".navbar .nav>li>i").on("click",function(){
        $(this).siblings("ul").slideToggle(50);
    });
// 回到顶部/底部
$(function(){
    $("#backtop").each(function(){
            $(this).find(".top").click(function(){
                $("html, body").animate({"scroll-top":0},"fast")});
            $(".bottom").click(function(){
                $("html, body").animate({
                    scrollTop:$(".footer").offset().top},800);return false;
            });
           var lastRmenuStatus=false;
           $(window).scroll(function(){
               var _top=$(window).scrollTop();
               if(_top>500){
                   $("#backtop").data("expanded",true);
               }else{
                   $("#backtop").data("expanded",false);
               }
               if($("#backtop").data("expanded")!=lastRmenuStatus){
                   lastRmenuStatus=$("#backtop").data("expanded");
                   if(lastRmenuStatus){
                       $("#backtop .top").slideDown();
                   }else{
                       $("#backtop .top").slideUp();
                   }
               }
           });
    });
});
// 导航栏每个导航背景控制
/* $(function() {
    var b = $("#monavber").attr("data-type");
    $(".nav>li ").each(function() {
        try {
            var T = $(this).attr("id");
            if ("index" == b)
                "nvabar-item-index" == T && $("#nvabar-item-index").addClass("current-menu-item");
            else if ("category" == b) {
                if (null != (bQ = $("#monavber").attr("data-infoid")))
                    for (var d = bQ.split(" "), S = 0; S < d.length; S++)
                        T == "navbar-category-" + d[S] && $("#navbar-category-" + d[S]).addClass("current-menu-item")
            } else if ("article" == b) {
                if (null != (bQ = $("#monavber").attr("data-infoid")))
                    for (d = bQ.split(" "),
                             S = 0; S < d.length; S++)
                        T == "navbar-category-" + d[S] && $("#navbar-category-" + d[S]).addClass("current-menu-item")
            } else if ("page" == b) {
                null != (bQ = $("#monavber").attr("data-infoid")) && T == "navbar-page-" + bQ && $("#navbar-page-" + bQ).addClass("current-menu-item")
            } else if ("tag" == b) {
                var bQ;
                null != (bQ = $("#monavber").attr("data-infoid")) && T == "navbar-tag-" + bQ && $("#navbar-tag-" + bQ).addClass("current-menu-item")
            }
        } catch (b) {}
    }),
        $("#monavber").delegate("a", "click", function() {
            $(".nav>li").each(function() {
                $(this).removeClass("current-menu-item")
            }),
            null != $(this).closest("ul") && 0 != $(this).closest("ul").length && ("munavber" == $(this).closest("ul").attr("id") ? $(this).addClass("current-menu-item") : $(this).closest("ul").closest("li").addClass("current-menu-item"))
        })
}); */
// 评论（取消）回复按钮控制
$(function () {
    $(document).on('click','.com_reply',function(){
        $('.cancel-reply').css('display','none');
        $(this).siblings('.cancel-reply').css('display','inline');
    })
  $(document).on('click','.cancel-reply',function(){
        $(this).css('display','none');
    });
});
// 侧栏跟随
$(function() {
    jQuery('.sidebar').theiaStickySidebar({
        additionalMarginTop:0
    });
});
// 自适应搜索
$(function(){
    $('.nav-search').on("click", function () {
        $('.navbar .menu').slideToggle(200);
    });
});