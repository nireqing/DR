define(function(){
  function Car(){}
  Car.prototype.init = function(){
    this.add();
    this.del();
  }

  //加载ringnum>0的数据
  Car.prototype.add = function(){
    // var id = window.location.search.split("=")[1];

    $.post("http://localhost/api/vi/buy.php",function(datas){
      // var data = datas.data;
      // console.log(data[0].src.split(",")[0]);
      // console.log(datas);
      var data = datas.data;
      var str1 = "";
      var str2 = "";
      var price = 0;
      var n = 0;
      var t = "";
      var price2 = 0;
     
      $.each(datas.data,function(index,val){
        for(var i=0;i<datas.data[index].ringnum;i++){
          str1 += `
          <div class="ringring">
            <input type="checkbox">
            <div class="ring_data">
            <img src="${val.src.split(",")[0]}" alt="">
            <div class="ring_right">
              <p>
                <em>${val.ringname}</em>
                <i>对戒</i>
                <b>￥${val.price}</b>
                <span>移入礼物清单</span>
                <span class="car_del" data-id="${val.id}">删除</span>
              </p>
              <p>
                <em>对戒信息</em>
                <i>材质：白18k金</i>
                <span>展开查看详情 ></span>
              </p>
            </div>
            </div>
          </div>
          `
          n++;
          price += Number(val.price);
        }
        
      });  

         $(".ring_car").html(str1);
         $(".jiesuan_ul").html(`
         <li>已选<span>${n}</span>件商品</li>
         <li>总价：<span>${price}<span></li>
         <li>免运费</li>
         <li>立即结算</li>
         `)
        
        //点击删除，移除自己头上的ring_car
        $(".car_del").on("click",function(){
          // console.log($(this).parents(".ringring"))
          var _that = $(this);
          var id = $(this).attr("data-id");
          $.post("http://localhost/api/vi/del.php",{"id":id},function(datas){
          if(datas){
            alert("删除成功!");
            n--;
            price2 = _that.parent().children().eq(2).html().slice(1);
            price = price-price2;
            $(".jiesuan_ul").html(`
            <li>已选<span>${n}</span>件商品</li>
            <li>总价：<span>${price}<span></li>
            <li>免运费</li>
            <li>立即结算</li>
            `)
            _that.parents(".ringring").remove();
            console.log(_that.attr("data-id"));
          }
          });
          
          
         
        })
      
      
     
    },"json");
  }

  //查询ringnum>0的数据加载出来
  Car.prototype.del = function(){
    // console.log(1);
  }
  return new Car();
})