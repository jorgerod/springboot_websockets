"use strict"

angular.module("ChatApp", [])
	.controller("ChatController", ['$scope', '$http', function ($scope, $http) {
		$scope.text = "";
		$scope.result = "";
		
		$scope.send  = function() {
	        $http({
	            method : 'GET',
	            url : '/chat',
	            params : {text: $scope.text}

	        }).success(function (data) {
			    $scope.result = data.text;

			}).error(function (data) {
			    $scope.result = "Houston, tenemos un problema"
			});
	    }
	}
]);