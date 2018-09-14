require.config({
	baseUrl: "/",
	paths: {
		"jquery": "libs/jquery-1.12.4",
		"template": "libs/template-web",
		"cookie": "libs/jquery_cookie",
		"url": "module/url",
		"header":"module/header",
		"footer":"module/footer",
		"banner":"module/banner",
		"zhuce":"module/zhuce",
		"denglu":"module/denglu",
		"shop":"module/shop",
		"xiangqing":"module/xiangqing",
		"car":"module/car",
		"indexx":"module/indexx",
		"placeholder":"module/placeholder",
		"fc":"js/fc"
	},
	shim: {
		header:{
			deps:["jquery"]
		},
		footer:{
			deps:["jquery"]
		},
		banner:{
			deps:["jquery"]
		},
		zhuce:{
			deps:["jquery"]
		},
		denglu:{
			deps:["jquery"]
		},
		cookie:{
			deps:["jquery"]
		},
		shop:{
			deps:["jquery"]
		},
		xiangqing:{
			deps:["jquery"]
		},
		car:{
			deps:["jquery"]
		},
		indexx:{
			deps:["jquery"]
		},
		placeholder:{
			deps:["jquery"]
		},
		fc:{
			deps:["jquery"]
		}
		
	}
})