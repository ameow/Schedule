'use strict';

(function () {
    var injections = [
        '$scope'
    ];

    function SendFileController($scope) {

        $scope.file = {};

        $scope.send = function () {
            // console.log($scope.file);
        };


    }

    SendFileController.$inject = injections;

    angular.module('app')
        .controller('SendFileController', SendFileController);
})();
