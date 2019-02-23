angular.module("myApp",[
						"factoryModule",
						"serviceModule",
						"providerModule"])
.config(function(myProProvider){
	myProProvider.setValues(9,9);
})
.controller("myCtrl",function($scope, myFac, myServ, myPro){
	$scope.fv = myFac.mul(6,7);
	$scope.sv = myServ.mul(8,4);
	$scope.pv = myPro.mul();
});