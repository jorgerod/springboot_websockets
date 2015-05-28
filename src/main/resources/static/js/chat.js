"use strict"

angular.module("ChatApp", [])
	.controller("ChatController", ['$scope', '$http',  function ($scope, $http) {
		$scope.isLogin = false;
		$scope.message = "";
		$scope.mail = "";
		//$scope.result = "fff";
		$scope.conversation = "";
		var stompClient = null;
		
		
		$scope.login = function () {
			if ($scope.mail && $scope.mail.length > 0) {
				$http({
					method: 'GET',
					url: '/chat/login',
					params: {mail: $scope.mail}
				}).success(function (response) {
					$scope.isLogin = response;
				}).error(function (response) {
					alert("Error: " + response);
				});
			}
		};
		
		/**funcion invocada desde el boton enviar del formulario. Envia el mensaje
		 * al servidor y este lo envia a los clientes que se hayan subscrito*/
		$scope.send  = function() {
			if ($scope.message && $scope.message.length > 0) {
				$http({
		            method: 'GET',
		            url: '/chat/send',
		            params: {text: $scope.message, mail: $scope.mail}

		        }).success(function (response) {
		        	$scope.message = "";

				}).error(function (response) {
					alert("Error: " + response);
				});
			}	
	    };
	    
	    
	    /**Me subscribo a los n canales que me interen.
	     * @rcvMessage: funcion que se ejecutara cuando me llegue un mensaje por el canal
	     * 				al que me haya subscrito*/
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
	    
	    /** Guarda en la variable los mensajes que me van llegando desde el servidor */
	    function receiveMessage (message) {
            var jsonMsg = JSON.parse(message.body);
            $scope.conversation += jsonMsg.mail + " dice:\n\t" + jsonMsg.text + "\n";
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