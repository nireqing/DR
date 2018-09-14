define(["placeholder","cookie"],function(placeholder){
  function Indexx(){}
  Indexx.prototype.init = function(){
    this.shenfen();
  }
  Indexx.prototype.shenfen = function(){
    //模拟placeholder
    // $(".index_shenfen").focus(function(){
    //   $(".index_shenfen").val("");
    //   $(this).blur(function(){
    //     if($(".index_shenfen").val()==""){
    //       $(".index_shenfen").val("请输入身份证号验证真爱承诺");
    //     }
    //   })
    // });
    placeholder.init(".index_shenfen","请输入身份证号验证真爱承诺","");
    $(".index_yz").on("click",function(){
      //验证身份证号
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if(reg.test($(".index_shenfen").val())){
        var id = $(".index_shenfen").val();
        console.log($(".index_shenfen").val());
        $.post("http://localhost/api/vi/checkid.php",{"sf":id},function(datas){
          //用户存在返回0；不存在返回1；
          console.log(datas);
          if(datas!=0){
            console.log("未注册");
            alert("新用户您好，现在去注册立刻开始您的幸福之路吗？");
            window.location.href="/html/zhuce.html";
          }else{
            console.log("注册过了");
            alert("身份证已注册，现在登录吗？");
            // $.cookie("shenfen",id,{path:'/'});
            window.location.href="/html/denglu.html";

          }
        })
      }else{
        alert("身份证不符合规范!");
      }

      
    });
  //点击不同的戒指图片跳转到不同的页面
  $(".jie1").on("click",function(){
    window.location.href = "/html/shop.html";
  });
  $(".jie2").on("click",function(){
    window.location.href = "/html/shop.html";
  }); 
  $(".jie3").on("click",function(){
    window.location.href = "/html/shop.html";
  });
  $(".jie4").on("click",function(){
    window.location.href = "/html/shop.html";
  });    
    
  }
  return new Indexx();
})