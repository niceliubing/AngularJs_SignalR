'use strict';

angular.module('signal', ['signalRModule'])
       .controller('messageCtr', ['$scope', '$log', 'signalRService', messageCtr]);

function messageCtr($scope, $log, signalRService)
{
    $scope.messages = ["hello","test"];
    $scope.message = '';


    signalRService.subscriptMessageChange(updateGUI);

    function updateGUI(message)
    {
        $scope.messages.push(message);
        $scope.$apply();
    }

    $scope.sendMessage = function () {
        signalRService.sendMessage($scope.message);
        $scope.message = '';
    }
}