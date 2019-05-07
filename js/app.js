var car = angular.module("carDealer",
	["ui.router",
	 "oc.lazyLoad",
	]);

	angular.module("carDealer").config(['$ocLazyLoadProvider',function ($ocLazyLoadProvider) {
		$ocLazyLoadProvider.config({});
	}]);

	//routing
	angular.module("carDealer").config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/home");

		$stateProvider.state("home", {
			url         : "/home", 
			templateUrl : "view/home.html" ,
			controller  : "HomeController",
			resolve     :
			{
				deps :['$ocLazyLoad' , function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'carDealer',
						files : 
						[
							"js/controllers/HomeController.js"
						]
					})
				}]
			}
		}).state("contact", {
			url         : "/ContactUs", 
			templateUrl : "view/contactUs.html" ,
			controller  : "contactUsController",
			resolve     :
			{
				deps :['$ocLazyLoad' , function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'carDealer',
						files : 
						[
							"js/controllers/ContactUsController.js"
						]
					})
				}]
			}
		}).state("suppliers", {
			url         : "/Suppliers", 
			templateUrl : "view/suppliers.html" ,
			controller  : "suppliersController",
			resolve     :
			{
				deps :['$ocLazyLoad' , function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'carDealer',
						files : 
						[
							"js/controllers/SuppliersController.js"
						]
					})
				}]
			}
		}).state("about", {
			url         : "/About", 
			templateUrl : "view/about.html" ,
			controller  : "aboutController",
			resolve     :
			{
				deps :['$ocLazyLoad' , function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'carDealer',
						files : 
						[
							"js/controllers/AboutControllers.js"
						]
					})
				}]
			}
		}).state("details", {
			url         : "/supplier/details", 
			templateUrl : "view/details.html" ,
			controller  : "detailsController",
			resolve     :
			{
				deps :['$ocLazyLoad' , function($ocLazyLoad){
					return $ocLazyLoad.load({
						name:'carDealer',
						files : 
						[
							"js/controllers/detailsController.js"
						]
					})
				}]
			}
		})
	});
