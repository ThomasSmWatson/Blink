var app = angular.module('blinkApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/register',{
			templateUrl: './../../routes/register.html',
			controller: 'RegisterController'
		})
		.when('/login',{
			templateUrl:'./../../routes/login.html',
			controller: 'BlogController'
		})
		.otherwise({
			redirectTo: '/'
		});
}]);

app.controller('BlogController',['$scope','$http',function($scope,$http){

}]);

app.controller('RegisterController',['$scope','$http',function($scope,$http){
	$scope.submitData = function(user){
		console.log('Data recived!');
		console.log(user);
		//NEED TO ADD HTTP REQ TO SERVER!
	}
}]);
