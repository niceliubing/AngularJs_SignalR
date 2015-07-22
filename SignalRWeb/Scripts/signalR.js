(function () {

    'user strict';
    angular.module('signalRModule', [])
    .service('signalRService', ['$q', '$log', signalRService]);

    function signalRService($q, $log) {
        init();

        var myHub, messageChangeList = [],
            sendMessageCallback;
        this.subscriptMessageChange = subscriptMessageChange;
        this.sendMessage = sendMessage;


        function init()
        {
            myHub = $.connection.myHub;
            $.connection.hub.logging = true;
            $.connection.hub.start();
            myHub.client.addMessage = addMessage
        }

        function addMessage(message) {
            sendMessageCallback(message);
        };

        function sendMessage(message)
        {
            myHub.server.send(message);
        }

        function subscriptMessageChange(cb)
        {
            sendMessageCallback = cb;
        }
    }
    
}());