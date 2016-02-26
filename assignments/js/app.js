/**
 * Created by clarice1 on 28-10-2015.
 */
app = angular.module('testApp', []);
app.controller('testController', ['$scope', function($scope){
		$scope.world = "World"
		// setTimeout(function(){
		// 	$scope.world = "lol"
		// 	$scope.$apply()
		// }, 1000)
	}
	]);