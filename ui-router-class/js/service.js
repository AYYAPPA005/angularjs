angular.module('serviceApp',[])
.controller('loginCtrl',
	 ['$scope', function($scope){
	$scope.message="LOGIN PAGE MESSAGE";
	$scope.submit = function(){
		$scope.data = "{LoginID: "+$scope.user.id+", password: "+$scope.user.pwd+"}";
	};
}]);