var app = angular.module('blinkApp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.
		when('/register',{
			templateUrl: './../../routes/register.html',
			controller: 'BlogController'
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
