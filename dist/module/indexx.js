"use strict";define(["placeholder","cookie"],function(n){function o(){}return o.prototype.init=function(){this.shenfen()},o.prototype.shenfen=function(){n.init(".index_shenfen","请输入身份证号验证真爱承诺",""),$(".index_yz").on("click",function(){if(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test($(".index_shenfen").val())){var n=$(".index_shenfen").val();console.log($(".index_shenfen").val()),$.post("http://localhost/api/vi/checkid.php",{sf:n},function(n){console.log(n),window.location.href=0!=n?(console.log("未注册"),alert("新用户您好，现在去注册立刻开始您的幸福之路吗？"),"/html/zhuce.html"):(console.log("注册过了"),alert("身份证已注册，现在登录吗？"),"/html/denglu.html")})}else alert("身份证不符合规范!")}),$(".jie1").on("click",function(){window.location.href="/html/shop.html"}),$(".jie2").on("click",function(){window.location.href="/html/shop.html"}),$(".jie3").on("click",function(){window.location.href="/html/shop.html"}),$(".jie4").on("click",function(){window.location.href="/html/shop.html"})},new o});