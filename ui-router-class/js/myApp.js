var app = angular.module("myApp",
	["ui.router","serviceApp"]);

app.config(['$stateProvider',
			'$urlRouterProvider',
		function($stateProvider,
				$urlRouterProvider) {
	
	$urlRouterProvider
	.otherwise("about");

	$stateProvider
	.state("about",{
		url:"about.htm",
		templateUrl:"views/about.pl"
	})
	.state("about.about1",{
		url:"about1.htm",
		templateUrl:"views/about1.pl"
	})
	.state("about.about2",{
		url:"about.htm",
		templateUrl:"views/about2.pl"
	})
	.state("about.about3",{
		url:"about.htm",
		templateUrl:"views/about3.pl"
	})
	.state("service",{
		url:"service.htm",
		views: {
			"":{
				templateUrl:"views/service.pl"
			},
			"service2@service":{
				templateUrl:"views/service2.pl",
				controller:"loginCtrl"
			},
			"service3@service":{
				templateUrl:"views/service3.pl"
			}
		}
	});
}])