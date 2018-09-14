define(function(){
	function Banner(){}
	Banner.prototype.init = function(ele){
		var box = $("#banner"),
		ul = $("#banner ul"),
		aLi = $('#banner ul li'),
		ol = $("#banner ol"),
		
		goPrev = $("#goPrev"),
		goNext = $("#goNext");
	
	var index = 0;//存当前处于第几张图
	var btnIndex = 0;//按钮的下标
	var flag = false;//没有播放
	var len = aLi.length;//图片的张数
	var liWidth = aLi.eq(0).outerWidth();
	
	//ul末尾拼接一个aLi[0],计算ul的宽度
	ul.append(aLi.eq(0).clone(true)).css("width",(len+1)*liWidth);
	
	//动态生成按钮
	for(var i = 0; i < len; i++){
		$("<li class='"+ (i==0?"ac":"") +"'>"+"</li>").appendTo(ol);
	}
	
	//按钮点击
	$("#banner ol li").on("click",function(){
		if(!flag){
			flag = true;
			$(this).addClass("ac").siblings().removeClass("ac");
			ul.animate({"left":-$(this).index()*liWidth},1000,function(){
				flag = false;
			});
			index = $(this).index();
		}
	})
	
	goPrev.on("click",function(){
		if(!flag){
			flag = true;
			index--;
			if(index < 0){
				//瞬间拉回补充那张图
				ul.css("left",-len*liWidth);
				//从补充那张图往最后一张图播放的index
				index = len - 1;
			}
			$("#banner ol li").eq(index).addClass("ac").siblings().removeClass("ac");
			ul.animate({"left":-index*liWidth},1000,function(){
				flag = false;
			})
		}
	})
	
	goNext.on("click",function(){
		if(!flag){
			flag = true;
			index++;
			if(index >= len){
				$("#banner ol li").eq(0).addClass("ac").siblings().removeClass("ac");
				ul.animate({"left":-len*liWidth},1000,function(){
					//瞬间拉回第0张
					ul.css("left",0);
					index = 0;
					flag = false;
				})
			}else{
				$("#banner ol li").eq(index).addClass("ac").siblings().removeClass("ac");
				ul.animate({"left":-index*liWidth},1000,function(){
					flag = false;
				})
			}
		}
	})
	
	var timer = null;
	function auto(){
		timer = setInterval(function(){
			goNext.trigger("click");
		},3000);
	}
	auto();
	
	$("#banner").hover(function(){
		clearInterval(timer);
	},function(){
		auto()
	});

	}
	return new Banner();
});