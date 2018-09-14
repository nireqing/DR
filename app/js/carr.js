require(["config"],function(){
	require(["jquery","footer","car"],function($,footer,car){
			$(function(){
				footer.init();
				car.init();
			});
		});
});
