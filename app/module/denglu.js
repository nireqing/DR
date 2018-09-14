define(["placeholder","cookie"],function(placeholder){
  function Denglu(){};
  Denglu.prototype.init = function(){
    this.fc();
    // console.log($.cookie("shenfen"));
    //如果cookie有值，赋值给用户名框,否则显示默认值
    if($.cookie("shenfen")!=null){
      $("#denglu_sf").val($.cookie("shenfen"));
      $("#denglu_sf").removeClass("denglu_ccc");
    }else{
      $("#denglu_sf").val("用户名/已验证过身份证");
    }
    placeholder.init("#denglu_sf","用户名/已验证过身份证","denglu_ccc");
    placeholder.init("#denglu_sfpw","请输入密码","denglu_mm_ccc");

    //获取焦点时，框里面的值清空，失去焦点时框的值时输入的值
    // $("#denglu_sf").focus(function(){
    //   $("#denglu_sf").val("");
    //   $("#denglu_sf").removeClass("denglu_ccc");
    // });
    // $("#denglu_sf").blur(function(){
    //   $("#denglu_sf").val();
      
    //   if($("#denglu_sf").val()=="用户名/已验证过身份证"){
    //     $("#denglu_sf").removeClass("denglu_ccc");
    //   }
    //   if($("#denglu_sf").val()==""){
    //     $("#denglu_sf").val("用户名/已验证过身份证");
    //     $("#denglu_sf").addClass("denglu_ccc");
    //   }
    //  });

    //点击登录按钮验证用户名是否存在，不存在跳注册页，存在跳主页并在header里记录用户名
    $("#denglu_btn").on("click",function(){
      var sf = $("#denglu_sf").val();
      var sfpw = $("#denglu_sfpw").val();
      if(sf!="用户名/已验证身份证" && sf!="" && sfpw!="请输入密码" && sfpw!=""){
        $.post("http://localhost/api/vi/denglu.php",{"sf":sf,"sfpw":sfpw},function(datas){
          if(datas!=0){
            $.cookie("$sf",sf,{path:'/'});
            $.myFck("登录成功","去首页",function(){
              window.location.href = "/index.html";
            },function(){
              
            });
          }else{
            $.myFck("没有账号","去注册",function(){
              window.location.href = "/html/zhuce.html";
            },function(){
              
            });
            

          }
      });
      }
    });
      
    
    
  }
  Denglu.prototype.fc = function(){
    
    $("#denglu_btn").on("click",function(){
      console.log(24);
    });
  }




  return new Denglu();
})