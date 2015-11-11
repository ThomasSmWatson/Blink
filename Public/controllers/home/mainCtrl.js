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
		var dob = user.dob.day.toString()+"/"+user.dob.month.toString()+"/"+user.dob.year.toString();
		user.dob = dob;
		var post = $http.post('/user', user);
		post.success(function(data,status,headers,config){
				console.log(data);
				console.log(status);
				console.log('Success!');
			});  
	}
	$scope.countTo= function(count){
		var array = [];
		for(i = 1; i<=count; i++){
			array.push(i);
		}
		return array;
	}
	$scope.countFrom = function(startingPoint,count){
		var numbers = [];
		for(i=startingPoint; i>startingPoint-count;i--){
			numbers.push(i);
		}
		return numbers;
	}
}]);
