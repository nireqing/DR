define(["placeholder"],function(placeholder){
  function Shop(){ }
Shop.prototype.init = function(){
    this.lunbo();  
    this.shuju();
    placeholder.init(".serch_shop","在结婚对戒下搜索","serch_ccc");
}
  
Shop.prototype.lunbo = function(){
  //轮播图
    var box = $("#duijie_banner"),
    ul = $("#duijie_banne ul"),
    aLi = $("#duijie_banner ul li"),
    ol = $("#duijie_banner ol"),
    aBtn = $("#duijie_banner ol li");
    var index=0;
    var flag = false;
    aBtn.on("click",function(){
      if(!flag){
      flag = true;
      aLi.eq(index).stop().fadeOut(1000);
      index = $(this).index();
      aLi.eq(index).stop().fadeIn(1000,function(){
        flag = false;
      });
    }
      });
    $("#duijie_goNext").on("click",function(){
    if(!flag){
      flag = true;
      aLi.eq(index).stop().fadeOut(1000);
      index++;
      if(index>aLi.length-1){
        index=0;
      }
      aLi.eq(index).stop().fadeIn(1000,function(){
        flag = false;
      });
    }
  });
  $("#duijie_goPrev").on("click",function(){
    if(!flag){
      flag = true;
      aLi.eq(index).stop().fadeOut(1000);

      index--;
      if(index<0) index=aLi.length-1;
      aLi.eq(index).stop().fadeIn(1000,function(){
        flag = false;
      });
    }
  });
  var timer = null;
  function shoplb(){
    timer = setInterval(function(){
      $("#duijie_goNext").trigger("click");
    },3000);
  }
  shoplb();
  $("#duijie_banner").hover(function(){
    clearInterval(timer);
  },function(){
    shoplb();
  });
}




  Shop.prototype.shuju = function(){

    //定义翻页的点击事件
    //n 定义每页显示的商品的个数
    var n = 9;
    //定义从第一页开始查询数据
    var index = 1;
    var allNum;
    var pageNum; 
       
    function change(){
      $.post("http://localhost/api/vi/shop.php",{"n":n,"index":index},function(datas){
        console.log(datas);
        var data = datas.data;
        var allNum = datas.allNum;
        var pageNum = Math.ceil(allNum/n);
        var str="";
          $.each(datas.data,function(index,val){
              str += `<div class="rings" data-id="${val.id}">
              <dl >
                <dt><img src="${val.src.split(",")[0] }" class="src"></dt>
                <dd>
                  <h2 class="price">￥${val.price}</h2>
                  <h3 class="ringname">${val.ringname}</h3>
                  <span>收藏</span><span class="bgcolor">立即购买</span>
                </dd>
              </dl>
            </div>`
          })
        $(".ring_wrap").html(str);
        $(".ring_buttom_wrap").html(
          ` <p class="ring_prev"><</p>
            <span class="ring_allnum">${index}/${pageNum}</span>
            <p class="ring_next">></p>
          `
        );
        //点击切换页
        $(".ring_next").on("click",function(){
            if(index>=pageNum){
                index = index
              }else{
                index++;
              }
          change();
        });
        $(".ring_prev").on("click",function(){
          if(index<1){
            index = 1;
          }else{
            index--;
          }
          change();
        });
        $(".src").on("click",function(){
          var id=$(this).parents(".rings").attr("data-id");
          window.location.href="/html/xiangqing.html?id="+id;
        });
        $(".bgcolor").on("click",function(){
          window.location.href = "/html/car.html";
        });
        
      },"json"); 
    }
    change();
  }
  return new Shop();
});