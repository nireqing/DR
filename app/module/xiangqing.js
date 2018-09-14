define(function(){
  function Xiangqing(){}
  Xiangqing.prototype.init = function(){
    this.xqshuju();
    this.fc();
  }
  Xiangqing.prototype.xqshuju = function(){
    var id = window.location.search.split("=")[1];
    $.post("http://localhost/api/vi/xiangqing.php",{"id":id},function(datas){
      // console.log(datas);
      var data = datas.data;
      $(".ringtu").html(`<img src="${data[0].src.split(",")[1]}">
      <ul>
        <li class="border"><img src="${data[0].src.split(",")[1]}"></li>
        <li><img src="${data[0].src.split(",")[2]}"></li>
        <li><img src="${data[0].src.split(",")[3]}"></li>       
      </ul>`)
      $(".ringtu li").on("mouseenter",function(){
        $(this).addClass("border").siblings().removeClass("border");
        var index=$(this).index();
        // console.log(index);
        $(".ringtu >img").attr("src",data[0].src.split(",")[index+1]);
      });
      $(".ringdata").html(
        `<h2>${data[0].ringname}</h2>
        <h3><span>￥${data[0].price}</span><span>更多FOREVER系列>></span></h3>`
      )
      
      //点击立即购买跳转到结算界面
      $(".buy").on("click",function(){
        window.location.href="/html/car.html";
      })
      //点击加入购物车使其对应的ringnum++；
      $(".addcart").on("click",function(){
        $.post("http://localhost/api/vi/addcart.php",{"id":id},function(datas){
          if(datas){
            $.myFck("添加成功","去购物车结算",function(){
              window.location.href = "/html/car.html";
            },function(){
              
            });
           
          }else{
            alert("加入购物车失败！")
          }
        });
      });
      
      //顶部分类栏显示商品的名称
      $(".fenlei_ringname").html(`<a href="javascript:;">&nbsp;&nbsp;${data[0].ringname}</a>`);
      
    },"json");
  }
  Xiangqing.prototype.fc = function(){
    
  }
  
  
  
  return new Xiangqing();
})