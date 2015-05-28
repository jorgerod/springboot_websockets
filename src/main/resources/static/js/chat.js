"use strict"

angular.module("ChatApp", [])
	.controller("ChatController", ['$scope', '$http',  function ($scope, $http) {
		$scope.text = "";
		//$scope.result = "fff";
		$scope.zzz = "";
		var stompClient = null;
		
		$scope.send  = function() {
	        $http({
	            method : 'GET',
	            url : '/chat',
	            params : {text: $scope.text, mail: "zzz@mail.com"}

	        }).success(function (data) {
			    $scope.result = data.text;

			}).error(function (data) {
			    $scope.result = "Houston, tenemos un problema"
			});
	    };
	    
	    $scope.connect = function(rcvMessage, rcvEvent, email) {
	           var socket = new SockJS('/message');
	           stompClient = Stomp.over(socket);
	           stompClient.connect({'X-Email':email}, function(frame) {
	               console.log('Connected: ' + frame);
	               stompClient.subscribe('/topic/chat', rcvMessage, {});
//	               stompClient.subscribe('/topic/events', rcvEvent, {});
	           }, function(error){
	                alert(error.headers.message);
	           });
	    };
	    
	    
	    function receiveMessage (message) {
            var jsonMsg = JSON.parse(message.body);
            $scope.zzz += "<br/>" + jsonMsg.text + " " + jsonMsg.time;
        } 
	    
	    var init = false;
		init = !init && $scope.connect(receiveMessage, undefined, "caca@ddd.com");
	    
	    /********* SOCKET************************/
	 // Listening to an event
//        socket.on('someEvent', function(data) {
//            $scope.data = data;
//        });
	  //Open a WebSocket connection
//	    var ws = ngSocket('ws://foo/bar');
//
//	    //Can call before socket has opened
//	    ws.send({foo: 'bar'});
	}
]);