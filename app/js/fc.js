$.extend(
  {//创建弹框,放入需要的文本框
  	myFck:function(txt,txt2,okFn,cancelFn){
			var $fc = $.myFc();
			var isOk=false;
			var $div;
  		$div = $(`<div class="fc">
		    <div class="fc_wrap">
		      <h2 class="fc_closebtn">X</h2>
		      <h3></h3>
		      <h4>`+txt+`</h4>
		      <h5 class="fc_btn">`+txt2+`</h5>
		    </div>
		  </div>`);		  
			$div.appendTo($($fc)).showCenter();
			//点击按钮移除
			
			$div.on("click",".fc_btn",function(){
				$div.remove();
				$fc.remove();
				okFn&&okFn();			
			});
			$div.on("click",".fc_closebtn",function(){
				$div.remove();
				$fc.remove();
				cancelFn&&cancelFn();
			});

  	},
  //透明遮罩层
    myFc:function(){
      var $div = $("<div>");
      $div.css({
      	"position":"fixed",
      	"left":"0",
      	"top":"0",
      	"width":"100%",
      	"height":"100%",
      	"background":"rgba(0,0,0,.1)",
      	"z-index":500
      });
      $div.appendTo($(document.body));
      return $div;
		}
	});
$.fn.extend({
	showCenter:function(obj){
		var _this = this;
		$(window).on("resize",center);
		function center(){
			var left =(($(window).innerWidth()-_this.outerWidth(true)-(obj?obj.width():0))/2);
			var top = (($(window).innerHeight()-_this.outerHeight(true)-(obj?obj.height():0))/2);
			$(_this).css({
				left:left,
				top:top
			});
		}
		center();
		return $(this);

	}
});