require(["config"],function(){
	require(["jquery","url","footer","zhuce","placeholder","fc"],
			function($,url,footer,zhuce,placeholder,fc){
		footer.init();
		zhuce.init();
		placeholder.init();
	});
}); 