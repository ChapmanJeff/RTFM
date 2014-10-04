var app = angular.module('rtfmApp');

app.controller('threadsCtrl', function($scope, threadsRef){
	$scope.threads = threadsRef.$asArray();

	$scope.threads.$loaded().then(function (threads) {
      console.log(threads);
    });

	$scope.createThread = function(username, newThreadTitle){
		$scope.threads.$add({username: username, title: newThreadTitle});
	}
});