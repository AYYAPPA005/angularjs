angular.module("factoryModule",[])
.factory("myFac", function(){
	return {
		sum : function(a,b){
			return a + b;
		},
		mul : function(a,b){
			return a*b;
		}
	}
});