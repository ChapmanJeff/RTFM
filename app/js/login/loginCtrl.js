var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, $location, EnvironmentService){
	$scope.env = EnvironmentService.getEnv();
	
	$scope.logMeIn = function(username){
		EnvironmentService.saveUsername(username);
		$location.path('/threads');
	}

});