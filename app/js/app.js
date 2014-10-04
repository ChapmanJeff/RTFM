var app = angular.module('rtfmApp', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider.when('/login', {
		templateUrl: '/app/js/login/login.html',
		controller: 'loginCtrl'
		
	}).when('/threads', {
		templateUrl: '/app/js/threads/threads.html',
		controller: 'threadsCtrl',
		resolve: {
    		threadsRef: function (ThreadService) {
      		return ThreadService.getThreads();
    	}
    }

	}).when('/threads/:threadId', {
		    templateUrl: '/app/js/threads/thread.html',
  		  controller: 'threadCtrl',
  		  resolve: {
    	      threadRef: function (ThreadService, $route) {
      	  	return ThreadService.getThread($route.current.params.threadId);
    	     },
            commentsRef: function (ThreadService, $route) {
            return ThreadService.getComments($route.current.params.threadId);
          }
 		   }

	}).otherwise({
		redirectTo: '/login'
	})

});

app.run(function($rootScope, $location, EnvironmentService){
	$rootScope.$on('$routeChangeStart', function(event, next, current){
    	var username = EnvironmentService.getUsername();
    	console.log(username);
      if(username){
    		$rootScope.username = username;
    	}
    	else {
    		$location.path('/login');
    	}
  });
});