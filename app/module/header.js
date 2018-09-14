//定义header模块
define(["placeholder","cookie"],function(placeholder){
  function Header(){}
  Header.prototype.init = function(){
    var _this=this;
    //加载header.html
    $("#header").load("/html/component/header.html",function(){
      $(".header_logo").on("click",function(){
        window.location.href = "/index.html";
      })
      //获取登录的userid放到header
      // console.log($.cookie("$sf"));
      if($.cookie("$sf")!=null){
        $("#welcome").html(`欢迎 ${$.cookie("$sf")}`);
      }else{
        $("#welcome").html(`<a href="/html/denglu.html">登录&nbsp;&nbsp;&nbsp;/</a>
        <a href="/html/zhuce.html">&nbsp;&nbsp;&nbsp;注册&nbsp;&nbsp;&nbsp;</a>`)
      }
      
        //获取页面宽度给下拉导航nav
        $(".nav").css("width",$(window).width());
        //导航绑定滑动出现nav
        $(".dr").hover(function(){
          $("#nav").addClass("ac");
        },function(){
          $("#nav").mouseleave(function(){
            $(this).removeClass("ac");
          })
        });
       
      //  _this.change($(".nav_left"),"left");
      //  _this.change($(".nav_right"),"right")

        // $(".fen").hover(function(){
        //   console.log(2);
        // $("#p1").find("img").attr({"src":"/images/ring2.jpg"});
        // });

        //导航栏图片变换
        var ul1 = $(".nav_left");
        var aLi1 = ul1.find("a");
        var index;
        aLi1.hover(function(){
          $(this).hover(function(){
            index = $(this).index();
            ul1.find("img").attr("src","/images/left"+index+".jpg");
          })
        });
        var ul2 = $(".nav_right");
        var aLi2 = ul2.find("a");
        var index;
        aLi2.hover(function(){
          $(this).hover(function(){
            index = $(this).index();
            ul2.find("img").attr("src","/images/right"+(index+1)+".jpg");
          })
        });
        
//模拟placeholder
        // $(".header_middle>input").on("click",function(){
        //   $(this).removeClass("ccc");
        //   $(this).val("");
        // });
        placeholder.init(".header_middle>input","输入身份证号验证真爱承诺","ccc");
//点击查询按钮跳转到登录界面
        $(".index_header_serch").on("click",function(){
          // console.log($(".header_middle>input").val());
          $.cookie("shenfen",$(".header_middle>input").val(),{path:'/'});
          window.location.href="/html/denglu.html";
        })


    });
    //吸顶
    $(window).on("scroll",function(){
      if($(window).scrollTop()>156){
        // console.log(1)
        $(".header_bottom").addClass("xixi");
        $(".header_logo").addClass("xixi");
        $(".header_nav").addClass("xixi");
        $(".header_user").addClass("xixi");
        // $(".header_bottom").css({"top":"0","position":"absolute","left":"0"});
        $(".nav").css({"margin-top":"58px","position":"absolute"});
      }else{
        $(".header_bottom").removeClass("xixi");
        $(".header_logo").removeClass("xixi");
        $(".header_nav").removeClass("xixi");
        $(".header_user").removeClass("xixi");
        $(".nav").css({"margin-top":"0px","left":"0px"});
      }
    })



  }
  // Header.prototype.change=function(ele,fx){
  // //滑到不同的a显示不同的图片;
  // var aLi1 = ele.find("a");
  // var index;
  //   aLi1.not(aLi1.last()).hover(function(){
  //     $(this).hover(function(){
  //       console.log(index)
  //       index = $(this).index();
  //         ele.find("img").attr({"src":"/images/"+fx+index+".jpg"});
  //       });
  //   })
  // }
  return new Header();
});