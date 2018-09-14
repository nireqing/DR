//首先引入config
require(["config"],function(){
	//再引入依赖的模块
	require(["jquery","url","header","footer","banner","cookie","indexx","placeholder"],
			function($,url,header,footer,banner,cookie,indexx,placeholder){
		header.init();
		footer.init();
		banner.init();
		indexx.init();
		placeholder.init();
		// $.get( url.url +"/api/v1/login.php",function(data){
		// 	var html = template("list",{data: data});
		// 	$("#content").html(html);
		// },"json");
	});
});              