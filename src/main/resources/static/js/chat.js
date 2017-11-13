"use strict"

angular.module("MessageActivityApp", ['ngSanitize'])
	.controller("MessageActivityController", ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
		$scope.message = "";
		$scope.text = "";
		$scope.type = "";//inicializo a tokenmanager
		$scope.time = undefined;
		
		var stompClient = null;
		var types = {"0": "TOKENMANAGER",
					 "1": "WALLET",
					 "2": "CMS",
					 "3": "CANALES",
					 "4": "TSP",
					 "5": "SWITCH"};
	    
	    /**Me subscribo a los n canales que me interesen.
	     * @rcvMessage: funcion que se ejecutara cuando me llegue un mensaje [] el canal
	     * 				al que me haya subscrito*/
	    $scope.connect = function(rcvMessage, rcvEvent, email) {
	           var socket = new SockJS('/message');
	           stompClient = Stomp.over(socket);
	           stompClient.connect({'X-Email':email}, function(frame) {
	               console.log('Connected: ' + frame);
	               stompClient.subscribe('/topic/messageactivity', rcvMessage, {});
	           }, function(error){
	                alert(error.headers.message);
	           });
	    };
	    
	    $scope.clean = function () {
	    	$scope.text = "";
	    }
	    
	    /** Guarda en la variable los mensajes que me van llegando desde el servidor */
	    function receiveMessage (message) {
	    	$scope.message = "";
            var jsonMsg = JSON.parse(message.body);
            $scope.text += $sce.trustAsHtml("<p class='lineShell_" + jsonMsg.type + "'>" + "   $ " + jsonMsg.time + " " + types[jsonMsg.type] + ">  " + jsonMsg.text + "</p>");
            $scope.type = jsonMsg.type;
            
            //pongo el scroll en la ultima linea
            var shell = document.getElementById("shell");
            shell.scrollTop = shell.scrollHeight;
            $scope.$apply()
        } 
	    
	    var init = false;
		init = !init && $scope.connect(receiveMessage, undefined, "TokenManager_MessageActivity");
	}
]);