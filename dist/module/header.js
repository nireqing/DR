"use strict";define(["placeholder","cookie"],function(o){function e(){}return e.prototype.init=function(){$("#header").load("/html/component/header.html",function(){$(".header_logo").on("click",function(){window.location.href="/index.html"}),null!=$.cookie("$sf")?$("#welcome").html("欢迎 ".concat($.cookie("$sf"))):$("#welcome").html('<a href="/html/denglu.html">登录&nbsp;&nbsp;&nbsp;/</a>\n        <a href="/html/zhuce.html">&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;</a>'),$(".nav").css("width",$(window).width()),$(".dr").hover(function(){$("#nav").addClass("ac")},function(){$("#nav").mouseleave(function(){$(this).removeClass("ac")})});var e=$(".nav_left");e.find("a").hover(function(){$(this).hover(function(){n=$(this).index(),e.find("img").attr("src","/images/left"+n+".jpg")})});var n,i=$(".nav_right");i.find("a").hover(function(){$(this).hover(function(){n=$(this).index(),i.find("img").attr("src","/images/right"+(n+1)+".jpg")})}),o.init(".header_middle>input","输入身份证号验证真爱承诺","ccc"),$(".index_header_serch").on("click",function(){$.cookie("shenfen",$(".header_middle>input").val(),{path:"/"}),window.location.href="/html/denglu.html"})}),$(window).on("scroll",function(){156<$(window).scrollTop()?($(".header_bottom").addClass("xixi"),$(".header_logo").addClass("xixi"),$(".header_nav").addClass("xixi"),$(".header_user").addClass("xixi"),$(".nav").css({"margin-top":"58px",position:"absolute"})):($(".header_bottom").removeClass("xixi"),$(".header_logo").removeClass("xixi"),$(".header_nav").removeClass("xixi"),$(".header_user").removeClass("xixi"),$(".nav").css({"margin-top":"0px",left:"0px"}))})},new e});