define(["placeholder"],function(placeholder){
  function Zhuce(){}
  
  Zhuce.prototype.init = function(){
    placeholder.init("#sf","身份证号码","denglu_ccc");
    placeholder.init("#sfpw","请输入密码","denglu_ccc");
    $("#zhuce_btn").on("click",function(){
      var sf = $("#sf").val();
      var sfpw = $("#sfpw").val();
      if(sfpw!="请输入密码" && sf!=""){ 
        $.post("http://localhost/api/vi/checkid.php",{"sf":sf},function(datas){
          console.log(datas);
          if(datas!=0){
            $.post("http://localhost/api/vi/zhuce.php",{"sf":sf,"sfpw":sfpw},function(datas){
              $.myFck("注册成功","去登录",function(){
                window.location.href="/html/denglu.html";
              },function(){
                
              });
            });
          }else{
            alert("身份证已经存在");
            window.location.href="/html/denglu.html";
          }
        });
      }
      
    });
    
  }
  
  return new Zhuce();
});