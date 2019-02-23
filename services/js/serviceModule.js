angular.module("serviceModule",["factoryModule"])
.service("myServ", function(myFac){
	this.sum = function(a,b){
		return myFac.sum(a,b);
	};
	this.mul = function(a,b){
		return a*b;
	};
});