angular.module("providerModule",[])
.provider("myPro", function(){
	this.a = 0, this.b = 0;
	this.$get = function(){
		var a = this.a, b = this.b;
		return {
			sum : function(){
				return a+b;
			},
			mul : function(){
				return a*b;
			}
		}
	};
	
	this.setValues = function(a,b){
		this.a = a;
		this.b = b;
	};
});