require(["config"],function(){
	require(["jquery","header","footer","shop","placeholder"],function($,header,footer,shop,placeholder){
		
        header.init();
				footer.init();
				shop.init();
				placeholder.init();
			
		});
	
	
});
