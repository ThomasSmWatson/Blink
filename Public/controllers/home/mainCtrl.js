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
		var post = $http.post('/user', user);
		post.success(function(data,status,headers,config){
				console.log(data);
				console.log(status);
				console.log('Success!');
			});  
		//NEED TO ADD HTTP REQ TO SERVER!
	}
}]);
