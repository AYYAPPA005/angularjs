var app = angular.module('uiApp',['ui.router']);

app.config([
	'$stateProvider','$urlRouterProvider',
	function($stateProvider,
				$urlRouterProvider){
		$urlRouterProvider.otherwise('/home');			
		$stateProvider
		.state('home',{
			url: '/home',
			templateUrl: 'partial-home.html'
		})
		.state('home.list',{
			url: '/list/:id',
			templateUrl: 'partial-home-list.html',
			controller: function($scope,$stateParams){
				$scope.courses = [
					'JAVA',
					'MS .NET',
					'ANGULAR JS'
				];
				$scope.params = $stateParams;
			}
		})
		// nested list with just some random string data
		.state('home.paragraph',{
			url: '/paragraph',
			template: 'THIS IS PLAIN TEXT DEFINED IN STATE'
		})
		// ABOUT PAGE AND MULTIPLE NAMED VIEWS
		.state('about', {
			url: '/about',
			views: {
				'': {
					templateUrl: 'partial-about.html'
				},
				'columnOne@about': {
					template: '<h3>Look I am a column!</h3>'
				},
				'columnTwo@about': {
					templateUrl: 'table-data.html',
					controller: 'columnTwoController'
				}
			}
		})
		.state('service',{
			url: '/services',
			template: '<div class="jumbotron text-center">'+
					'<h1>The Service Page</h1></div>'
		})
		.state('contact',{
			url: '/contactus',
			templateUrl: 'contact.htm'
		});
	}
]);
app.controller('columnTwoController',
			function($scope) {
	$scope.message = 'NARESH Course details';
	$scope.books = [
		{
			name: 'NIT JAVA',
			price: 50
		},
		{
			name: 'NIT Angular',
			price: 100
		},
		{
			name: 'NIT .NET',
			price: 200
		}
	];
});